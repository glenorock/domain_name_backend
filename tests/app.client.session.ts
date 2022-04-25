import epp_session from '../app/client/session/session'
import transporter from '../app/utils/transporter'

transporter.connect().then(() =>{
    epp_session.hello().then((res) =>{
        console.log("res")
        epp_session.login().then((res) =>{
            console.log("res")
            epp_session.logout().then((res) =>{
                console.log("res")
            })
        })
    }).then(() =>{
        transporter.close()
    })
})