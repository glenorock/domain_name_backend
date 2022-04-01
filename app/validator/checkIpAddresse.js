// const { exec } = require("child_process");
// const ping = require('ping')
    
const checkFormat = (ip) =>{
    let regex = RegExp(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/)
    return regex.test(String(ip))
}

// const checkAvailability = function(ip){
//     // Objective: Send a ping to the ip addresse passed as a parameter
//     exec(`dir`,(error, stdout, stderr) => {
//         if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//         }
//         if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//         }
//         console.log(`stdout: ${stdout}`);
//     })
//     return ping.promise.probe(ip)
//     // ping.promise.probe(ip).then((res) =>{
//     //     console.log(res)
//     //     return res.alive
//     // }).catch((err) =>{
//     //     console.log(err)
//     //     return err
//     // })
// }

module.exports = {checkFormat}//,checkAvailability}