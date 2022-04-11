const epp_session = require('../app/client/session/session')

epp_session.hello().then((res) =>{
    console.log(res)
})

epp_session.login().then((res) =>{
    console.log(res)
})

epp_session.logout().then((res) =>{
    console.log(res)
})