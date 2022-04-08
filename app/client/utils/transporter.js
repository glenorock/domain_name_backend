const config = require('config')
const Net = require('net')

const host = config.get("cocca.host")
const port = config.get("cocca.port")

const send = async (message) => {
    const client = new Net.Socket()
    let response = undefined
    await client.connect({
        port: port,
        host: host
    }, () => {
        console.log('TCP connection established with the server.');
        client.write(message);
    })
    
    await client.on('data', function (chunk) {
        console.log(`Data received from the server: \n ${chunk.toString()}`);
        response = chunk
        client.end();
    });
    await client.on('end', function () {
        waiting = false
        console.log('Requested an end to the TCP connection');
    });
    return response
}

module.exports = {
    send
}