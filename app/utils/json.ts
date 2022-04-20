const fs = require('fs')
const saveToFile = (data: any,file: any) =>{
    return new Promise((resolve,reject) =>{
        try{
            let output:string = JSON.stringify(data)
            fs.writeFileSync(file,output)
            resolve(output)
        }catch(err:any){
            reject(err)
        }
    })
}

module.exports = {saveToFile}