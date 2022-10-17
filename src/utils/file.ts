import * as fs from "fs"

const saveToFile = (data: any,file: string) =>{
    return new Promise((resolve,reject) =>{
        try{
            const output:string = JSON.stringify(data)
            fs.writeFileSync(file,output)
            resolve(output)
        }catch(err:any){
            reject(err)
        }
    })
}

export {saveToFile}