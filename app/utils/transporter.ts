import config from 'config'
import * as Net from 'net'

const host = String(config.get("cocca.host"))
const port = Number(config.get("cocca.port"))

const send = (message: string) => {
    const client = new Net.Socket()
    return new Promise((resolve) => {
        client.connect(port, host, () => {
            console.log('TCP connection established with the server.');
            client.write(message)
            client.on('data', function (chunk: any) {
                let result = chunk.toString()
                client.end()
                resolve(result)
            });
        })
    })
}

export default {
    send
}