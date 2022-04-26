import  * as epp_session from '../app/client/session/session'
import  {Transporter} from '../app/utils/index'

Transporter.connect().then(() =>{
    epp_session.hello().then((res:any) =>{
        console.log("res")
        epp_session.login().then((res:any) =>{
            console.log("res")
            epp_session.logout().then((res:any) =>{
                console.log("res")
            })
        })
    }).then(() =>{
        Transporter.close()
    })
})