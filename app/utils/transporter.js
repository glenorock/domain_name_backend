const config = require('config')
const Net = require('net')

const host = config.get("cocca.host")
const port = config.get("cocca.port")

const send = (message) => {
    const client = new Net.Socket()
    return new Promise((resolve) => {
        client.connect({
            port: port,
            host: host
        }, () => {
            console.log('TCP connection established with the server.');
            client.write(message)
            client.on('data', function (chunk) {
                let result = chunk.toString()
                client.end()
                resolve(result)
            });
        })

    })
}

module.exports = {
    send
}