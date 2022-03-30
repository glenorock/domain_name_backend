const check = (ip) =>{
    let regex = RegExp("/^[0-9]{3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/")
    return regex.test(String(ip))
}

module.exports = {check}