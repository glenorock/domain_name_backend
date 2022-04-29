import *  as mtn from '../app/payment/Momo/main'

// mtn.createSandboxUser().then((out) =>{console.log(out)})

// mtn.generateAutorisationToken().then((out) =>{
//     console.log(out)
// })

mtn.requestToPay("+237683293295").then((out:any) =>{
    console.log(out)
})