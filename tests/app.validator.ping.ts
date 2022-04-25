import  * as validator from '../app/validator/checkIpAddresse'
let ping = validator.isAlive

let truthy = ["142.250.75.238","176.32.103.205","151.101.129.67"]

truthy.forEach((ele) =>{
    ping(ele)
})

let falsy = ["154.72.150.48","169.254.52.230"," 192.168.168.225"]

falsy.forEach((ele) =>{
    ping(ele)
})