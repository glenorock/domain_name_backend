import { Logger } from "../utils/logger"

import fs from 'fs-extra'
import config from 'config'


const checkConstitution = (domain:string) =>{
    let reg = RegExp(/^[a-zA-Z][a-zA-Z0-9_][a-zA-Z0-9_]*[a-zA-Z0-9]$/)
    return reg.test(String(domain))
}

const checkLength = (domain:string) =>{
    let reg = RegExp(/^.{2,63}$/)
    return reg.test(String(domain))
}

let filePath = String(config.get("path.root")).concat("\\").concat(config.get("path.root"))
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

export default {checkConstitution,checkWhiteListed,checkLength}