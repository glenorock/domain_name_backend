import * as net from 'net'

/**
 * @description A socket connecting the epp client and the server
 */
export class EppSocket {
    /**
     * @description The socket to be created
     */
    private client: net.Socket

    /**
     * @description server's host's ip address
     */
    private host: string

    /**
     * @description the port on which the server is listenning
     */
    private port: number

    /**
     * @description the different responses from the server
     */
    private responses: string[]
    
    /**
     * @description indicates if the client is connected to the server or not
     */
    private connected: boolean = false

    /**
     * 
     * @param host server's host's ip address
     * @param port the port on which the server is listenning
     */
    public constructor(host:string,port:number) {
        this.client = new net.Socket()
        this.host = host
        this.port = port
        this.responses = []
    }

    /**
     * 
     * @description initiates the connection between the client and the server
     */
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

    /**
     * 
     * @description destroys the socket
     */
    private destroy() {
        return new Promise((resolve) => {
            this.client.end()
            this.client.on("end",() =>{
                this.connected = false
                resolve("TCP connection ended")
            })
        })
    }
    /**
     * 
     * @returns this.reponses 
     */
    public getResponse(): string[] {
        return this.responses
    }

    /**
     * 
     * @returns this.host
     */
    public getHost(): string {
        return this.host
    }

    /**
     * 
     * @returns this.port
     */
    public getPort(): number {
        return this.port
    }

    /**
     * 
     * @returns this.connected
     */
    public isConnected(): boolean {
        return this.connected
    }

    /**
     * 
     * @param message a message to be sent to the server
     * @description writes the message on the socket
     */
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

    /**
     * 
     * @param message a message to be sent to the server
     * @description sends the message to the server by connecting the later, writing on the server, and upon reception of the data, destroys the connection
     */
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