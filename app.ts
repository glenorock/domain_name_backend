import Express from 'express'
import Config from 'config'

import { Domain, DomainContactType, DomainPeriodUnits } from './app/models/domain'
import { Host, IpAddresse, IpAddresseType } from './app/models/hosts'
import { Contact, PostalInfoType } from './app/models/contact'

import Generator from './app/utils/generator'
import Controller from './app/controller/controller'
import controller from './app/controller/controller'

const whois = (req: Express.Request, res: Express.Response) => {
    let body = req.body
    let names = body.names
    Controller.whois(names).then((out) => {
        res.status(200).send(out)
    }).catch((err) => {
        res.status(400).send(err)
    })
}

const registerDomain = (req: Express.Request, res: Express.Response) => {
    let body = req.body
    let hosts: Host[] = []
    body.ns.forEach((ns: any) => {
        let addr: IpAddresse[] = []
        ns.addr.forEach((a:any) => {
            addr.push({
                type:(a.isV4)?IpAddresseType.IPV4:IpAddresseType.IPV6,
                addresse:a.value
            })
        })
        hosts.push(
            {
                name: ns.name,
                addr: addr
            }
        )
    })
    let contacts:{type:string,value:Contact}[] = []
    body.contact.forEach((contact:any) =>{
        contacts.push({
            type:(contact.isAdmin)?DomainContactType.ADMIN:DomainContactType.TECH,
            value: {
                id:Generator.generateContactIdentifier(contact.name),
                postalInfo:{
                    type:(contact.type === "int")?PostalInfoType.INT:PostalInfoType.LOC,
                    name:contact.name,
                    org:contact.org,
                    addr:{
                        street:contact.addr.streets,
                        city:contact.addr.city,
                        sp:contact.addr.sp,
                        pc:contact.addr.pc,
                        cc:contact.addr.cc
                    }
                },
                voice:contact.voice,
                fax: contact.fax,
                email:contact.email
            }
        })
    })
    let domain: Domain = {
        name: body.name,
        period: {
            unit: (body.period.unit === 'y' || body.period.unit === "Y" ) ? DomainPeriodUnits.YEARS : DomainPeriodUnits.MONTHS,
            value: body.period.value
        },
        ns: hosts,
        registrant: Config.get("cocca.auth.client"),
        contact: contacts,
        authInfo:{
            pw: body.authInfo.pw,
        }
    }
    controller.registerDomain(domain,body.payer).then((result) =>{
        res.status(200).json({domain:domain,payer:body.payer})
    }).catch((err) =>{
        res.send(err)
    })
    
}

const renewDomain = (req:Express.Request, res: Express.Response)  =>{
       
}

export default {
    whois,
    registerDomain,
    renewDomain
}