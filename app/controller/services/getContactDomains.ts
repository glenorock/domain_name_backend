import * as eppSession from '../../client/Request/lib/session/session'
import * as eppContact from '../../client/Request/lib/object/contact/contact'
import * as Utils from '../../utils/index'


const getDomains = (id:string) =>{
    return new Promise((resolve,reject) =>{
        // eppSession.hello().then(() =>{
        //     eppSession.login().then(() =>{
        //         eppSession.hello().then(() =>{
        //             eppContact.getDomains(id).then((res) =>{
        //                 eppSession.logout().then(() => {
        //                     try{
        //                         console.log(xml.toJson(String(res)))
        //                     }catch{
        //                         console.log("Error occured")
        //                     }
        //                     resolve(res)
        //                 }).catch((err) =>{
        //                     reject(err)
        //                 })       
        //             }).catch(err => {
        //                 reject(err)
        //             })
        //         }).catch(err =>{
        //             reject(err)
        //         })
        //     })
        // }).catch((err) =>{
        //     reject(err)
        // })
        resolve("Get Domain")
    })
}

export {
    getDomains
}