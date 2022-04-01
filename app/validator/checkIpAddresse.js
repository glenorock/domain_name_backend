const ping = require('ping')
    
const checkFormat = (ip) =>{
    let regex = RegExp(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/)
    return regex.test(String(ip))
}

const isAlive = function(ip){
    ping.promise.probe(ip).then((res) =>{
        console.log(res)
        return res.alive
    }).catch((err) =>{
        console.log(err)
        return err
    })
}

module.exports = {checkFormat,isAlive}