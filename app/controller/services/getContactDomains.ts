import eppSession from '../../client/session/session'
import eppContact from '../../client/object/contact/contact'
import xml from '../../utils/xml'

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

export default {
    getDomains
}