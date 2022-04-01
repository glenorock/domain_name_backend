const check = (email) =>{
    let regex = RegExp(/^[a-zA-z0-9].+@.+\..*$/)
    return regex.test(String(email))
}
module.exports = {check}