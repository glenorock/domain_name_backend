"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDomains = void 0;
const getDomains = (id) => {
    return new Promise((resolve, reject) => {
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
        resolve("Get Domain");
    });
};
exports.getDomains = getDomains;
