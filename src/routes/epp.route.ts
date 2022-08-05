import { Router } from "express";
import * as ContactController from '../controller/contact.cocca.controller';
import * as DomainController from '../controller/domain.cocca.controller';
import * as HostController from '../controller/host.cocca.controller';

const router = Router();

// Check
router.post('/check/host', async function(req:any, res:any) {
    const results = await HostController.check(req.body.domain,req.body.name,req.body.ext)
    res.send(results.data)
});


router.post('/check/domain', async function(req:any, res:any) {
    const results = await DomainController.check(req.body.name)
    console.log(results)
    res.send(results.data)
});


router.post('/check/contact', async function(req:any, res:any) {
    const results = await ContactController.check(req.body.id)
    res.send(results.data)
});

// Info
router.post('/info', async function(req:any, res:any) {
    const results = await DomainController.info(req.body.name)
    if(results.status !== 200 || results.data.status !== 200) res.send(results.data)
    let data = results.data.info
    delete data.authInfo
    data.contacts.admin = await (await ContactController.info(data.contacts.admin)).data.info
    data.contacts.billing = await (await ContactController.info(data.contacts.billing)).data.info
    data.contacts.tech = await (await ContactController.info(data.contacts.tech)).data.info
    data.registrant = await (await ContactController.info(data.registrant)).data.info || 'orock'
    console.log(data.registrant)
    let tmpNs:any[] = []
    if (Symbol.iterator in Object(data.ns)){
        tmpNs = [...data.ns]
    }
    let ns:any[] = []
    let promises:any[] = []
    await tmpNs.map( async (ele) =>{
        let promise = new  Promise(async (resolve,reject) => {
            let tmp = String(ele).split(".")
            let dat = await (await HostController.info(tmp[0],tmp[1],tmp[2])).data.info
            ns.push(dat)
            resolve(dat)
        })
        promises.push(promise)
    })
    await Promise.all(promises)
    data.ns = ns  
    res.send(data)
});

// create
router.post('/register',async function(req:any, res:any) {
    const contacts = [...req.body.contacts]
    let ns = [...req.body.ns]
    const domain = req.body.domain
    let promises:any[] = []
    contacts.map((ele) => {
        promises.push(
            new Promise(async (resolve,reject) => {
                let data = await (await ContactController.create(ele)).data
                console.log("contact",data)
                resolve(data)
            })
        )
    })
    await Promise.all(promises)
    console.log("contacts_done")
    promises = []
    ns.map((ele) => {
        promises.push(
            new Promise(async (resolve,reject) => {
                let dat = await (await HostController.create(ele)).data
                console.log("ns",dat)
                resolve(dat)
            })
        )
    })
    await Promise.all(promises)
    console.log("ns_done")
    promises = []
    promises.push(
        new Promise(async (resolve,reject) => {
            let dat = await (await DomainController.create(domain)).data
            console.log(dat)
            resolve(dat)
        })
    )
    await Promise.all(promises)
    console.log("domain_done")
    const results = await DomainController.info(req.body.name)
    if(results.status !== 200 || results.data.status !== 200) res.send(results.data)
    let data = results.data.info
    delete data.authInfo
    data.contacts.admin = await (await ContactController.info(data.contacts.admin)).data.info
    data.contacts.billing = await (await ContactController.info(data.contacts.billing)).data.info
    data.contacts.tech = await (await ContactController.info(data.contacts.tech)).data.info
    let tmpNs = [...data.ns]
    ns = []
    promises = []
    await tmpNs.map( async (ele) =>{
        let promise = new  Promise(async (resolve,reject) => {
            let tmp = String(ele).split(".")
            let dat = await (await HostController.info(tmp[0],tmp[1],tmp[2])).data.info
            ns.push(dat)
            resolve(dat)
        })
        promises.push(promise)
    })
    await Promise.all(promises)
    data.ns = ns  
    res.send(data)
    res.send({done:true})
})

export default router;
