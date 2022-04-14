const mtn = require('../app/payment/Momo/main')

// mtn.createSandboxUser().then((out) =>{console.log(out)})

mtn.generateAutorisationToken().then((out) =>{
    console.log(out)
})