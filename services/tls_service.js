let tls

try{
    tls = require('tls')
}catch{
    console.log('tls support disabled')
}