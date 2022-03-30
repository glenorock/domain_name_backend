const fs = require('fs')
const path = require('path')
const config = require('config')


const checkConstitution = (domain) =>{
    let reg1 = RegExp("")
    let reg2 = RegExp("")
    return reg1.test(String(domain)) & reg2.test(String(domain))
}

const checkProhibited = (domain) => {
    let filePath = path.join(config.get("path.root"),config.get("path.blacklist"))
    let data = fs.readFileSync(filePath, 'utf8')
    try{
        let arr = String(data).split("\n")
        for(i=0;i<arr.length;i++){
            let reg = RegExp(".*" + arr[i] + ".*")
            if (reg.test(domain)) return false
        }
    }catch{
        console.error(err)
        return true
    }
    return true
}

module.exports = {checkConstitution,checkProhibited}