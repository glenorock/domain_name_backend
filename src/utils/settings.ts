import * as fs from 'fs'
import * as path from 'path'

import config from 'config'
const file = require('../../../config/default.json')
const backlist = "blacklist"

let fileName = path.join(config.get("path.root"),config.get("path.conf"))

const update = (property:String,value:String)=>{
    let props = String(property).split(".")
    let f = file
    switch(props.length){
        case 0:
            break
        case 1:
            f[props[0]] = value
            break
        case 2:
            f[props[0]][props[1]] = value
            break
        case 3:
            f[props[0]][props[1]][props[2]] = value
            break
        case 4:
            f[props[0]][props[1]][props[2]][props[3]] = value
            break
        case 5:
            f[props[0]][props[1]][props[2]][props[3]][props[4]] = value
            break
            
        default:
            break
    }
    fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err: any) {
        if (err) return console.log(err);
    });
}

const addBlacklist = (words:(string|string[])) =>{
    if(Array.isArray(words)){
        words.forEach((word) =>{
            fs.writeFile(backlist, (word + "/n"), { flag: "a+" }, (err) => {
                if (err) throw err;
                console.log(err);
            });    
        })
    }else{
        fs.writeFile(backlist, (words + "/n"), { flag: "a+" }, (err) => {
            if (err) throw err;
            console.log('The file is created if not existing!!');
        }); 
    }
}

export {update,addBlacklist}