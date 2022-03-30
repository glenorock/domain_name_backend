const check = (email) =>{
    let regex = RegExp("/^[a-zA-z].+@.+$/")
    return regex.test(String(email))
}
module.exports = {check}