import { Router } from "express";
import * as ContactController from '../controller/contact.cocca.controller';
import * as DomainController from '../controller/domain.cocca.controller';
import * as HostController from '../controller/host.cocca.controller';

const router = Router();

// Check
router.post('/check/host', async (req:any, res:any) => {
    const results = await HostController.check(req.body.domain,req.body.name,req.body.ext)
    res.send(results.data)
});


router.post('/check/domain', async (req:any, res:any) => {
    const results = await DomainController.check(req.body.name)
    res.send(results.data)
});


router.post('/check/contact', async (req:any, res:any) => {
    const results = await ContactController.check(req.body.id)
    res.send(results.data)
});

// Info
router.post('/info', async (req:any, res:any) => {
    const results = await DomainController.info(req.body.name)
    if(results.status !== 200 || results.data.status !== 200) res.send(results.data)
    const data = results.data.info
    delete data.authInfo
    data.contacts.admin = await (await ContactController.info(data.contacts.admin)).data.info
    data.contacts.billing = await (await ContactController.info(data.contacts.billing)).data.info
    data.contacts.tech = await (await ContactController.info(data.contacts.tech)).data.info
    data.registrant = await (await ContactController.info(data.registrant)).data.info || 'orock'
    let tmpNs:any[] = []
    if (Symbol.iterator in Object(data.ns)){
        tmpNs = [...data.ns]
    }
    const ns:any[] = []
    const promises:any[] = []
    await tmpNs.map( async (ele) =>{
        const promise = new  Promise(async (resolve,reject) => {
            const tmp = String(ele).split(".")
            const dat = await (await HostController.info(tmp[0],tmp[1],tmp[2])).data.info
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
router.post('/register',async (req:any, res:any) => {
    const contacts = [...req.body.contacts]
    let ns = [...req.body.ns]
    const domain = req.body.domain
    let promises:any[] = []
    contacts.map((ele) => {
        promises.push(
            new Promise(async (resolve,reject) => {
                const dat = await (await ContactController.create(ele)).data
                resolve(dat)
            })
        )
    })
    await Promise.all(promises)
    promises = []
    ns.map((ele) => {
        promises.push(
            new Promise(async (resolve,reject) => {
                const dat = await (await HostController.create(ele)).data
                resolve(dat)
            })
        )
    })
    await Promise.all(promises)
    promises = []
    promises.push(
        new Promise(async (resolve,reject) => {
            const dat = await (await DomainController.create(domain)).data
            resolve(dat)
        })
    )
    await Promise.all(promises)
    const results = await DomainController.info(req.body.name)
    if(results.status !== 200 || results.data.status !== 200) res.send(results.data)
    const data = results.data.info
    delete data.authInfo
    data.contacts.admin = await (await ContactController.info(data.contacts.admin)).data.info
    data.contacts.billing = await (await ContactController.info(data.contacts.billing)).data.info
    data.contacts.tech = await (await ContactController.info(data.contacts.tech)).data.info
    const tmpNs = [...data.ns]
    ns = []
    promises = []
    await tmpNs.map( async (ele) =>{
        const promise = new  Promise(async (resolve,reject) => {
            const tmp = String(ele).split(".")
            const dat = await (await HostController.info(tmp[0],tmp[1],tmp[2])).data.info
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
