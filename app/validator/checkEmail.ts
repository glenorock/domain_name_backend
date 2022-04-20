import { Logger } from "../utils/logger"
const check = (email:string) =>{
    let regex = RegExp(/^[a-zA-z0-9].+@.+\..*$/)
    return regex.test(String(email))
}
module.exports = {check}