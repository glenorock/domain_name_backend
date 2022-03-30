const Net = require('net')

const send = async (port_,host_,message_) =>{
    let res
    const client = Net.Socket()
    await client.connect(({port:port_,host:host_}),() =>{
        console.log('TCP connection established with the server.');
        client.write(message_);
    })
    await client.on('data', function(chunk) {
        console.log(`Data received from the server: ${chunk.toString()}.`);
        res = chunk
        client.end();
    });
    return res
}

module.exports = {
    send
}