import * as net from 'net'
import config from 'config'

export class EppSocket {
    private client: net.Socket
    private host: string
    private port: number
    private responses: string[]
    private connected: boolean = false

    public constructor() {
        this.client = new net.Socket()
        this.host = String(config.get("cocca.host"))
        this.port = Number(config.get("cocca.port"))
        this.responses = []
    }

    public static getInstance(): EppSocket {
        return new EppSocket()
    }

    private connect() {
        return new Promise((resolve) => {
            this.client = new net.Socket()
            this.client.connect(
                this.port,
                this.host,
                () => {
                    this.connected = true
                    resolve("TCP connection established with the server.")
                }
            )
        })
    }

    private destroy() {
        return new Promise((resolve) => {
            this.client.end()
            this.client.on("end",() =>{
                this.connected = false
                resolve("TCP connection ended")
            })
        })
    }

    public getResponse(): string[] {
        return this.responses
    }

    public getHost(): string {
        return this.host
    }

    public getPort(): number {
        return this.port
    }

    public isConnected(): boolean {
        return this.connected
    }

    private write(message: string) {
        return new Promise((resolve) => {
            this.client.write(message)
            this.client.on("data", (data) => {
                this.responses.push(
                    data.toString()
                )
                resolve(data.toString())
            })
        })
    }

    public send(message:string){
        return new Promise((resolve) =>{
            this.connect().then(() =>{
                this.write(message).then((res) =>{
                    this.destroy().then(() =>{
                        resolve(res)
                    })
                })
            })
        })
    }
}