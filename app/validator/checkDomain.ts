import { Logger } from "../utils/logger"
const fs = require('fs')
const path = require('path')
const config = require('config')

const checkConstitution = (domain:string) =>{
    let reg = RegExp(/^[a-zA-Z][a-zA-Z0-9_][a-zA-Z0-9_]*[a-zA-Z0-9]$/)
    return reg.test(String(domain))
}

const checkLength = (domain:string) =>{
    let reg = RegExp(/^.{2,63}$/)
    return reg.test(String(domain))
}

let filePath = path.join(config.get("path.root"),config.get("path.blacklist"))
let data = fs.readFileSync(filePath, 'utf8')
const blacklist = String(data).split("\n")
    
const checkWhiteListed = (domain:string) => {
    for(let i=0;i<blacklist.length;i++){
        let ele = String(blacklist[i]).replace("\r","")
        let res = String(domain).includes(ele)
        if (res)  return false
    }
    return true
}

module.exports = {checkConstitution,checkWhiteListed,checkLength}