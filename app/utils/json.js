const fs = require('fs')
const saveToFile = (data,file) =>{
    return new Promise((resolve,reject) =>{
        try{
            fs.writeFileSync(file,JSON.stringify(data))
            resolve()
        }catch{
            reject(fs)
        }
    })
}

module.exports = {saveToFile}