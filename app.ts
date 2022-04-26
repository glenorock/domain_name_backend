import Express from 'express'
import Config from 'config'

import {
    Domain,
    DomainContactType,
    DomainPeriodUnits,
    Host,
    IpAddresse,
    IpAddresseType,
    Contact,
    PostalInfoType
} from './app/models/index'
import { Generator } from './app/utils'
import * as  Controller from './app/controller/controller'
import * as  controller from './app/controller/controller'

const whois = (request: Express.Request, response: Express.Response) => {
    let body = request.body
    let names = body.names
    Controller.whois(names).then((out) => {
        response.status(200).send(out)
    }).catch((err) => {
        response.status(400).send(err)
    })
}

const registerDomain = (request: Express.Request, response: Express.Response) => {
    let body = request.body
    let hosts: Host[] = []
    body.ns.forEach((ns: any) => {
        let addr: IpAddresse[] = []
        ns.addr.forEach((a: any) => {
            addr.push({
                type: (a.isV4) ? IpAddresseType.IPV4 : IpAddresseType.IPV6,
                addresse: a.value
            })
        })
        hosts.push(
            {
                name: ns.name,
                addr: addr
            }
        )
    })
    let contacts: { type: string, value: Contact }[] = []
    body.contact.forEach((contact: any) => {
        contacts.push({
            type: (contact.isAdmin) ? DomainContactType.ADMIN : DomainContactType.TECH,
            value: {
                id:Generator.generateContactIdentifier(contact.name),
                postalInfo: {
                    type: (contact.type === "int") ? PostalInfoType.INT : PostalInfoType.LOC,
                    name: contact.name,
                    org: contact.org,
                    addr: {
                        street: contact.addr.streets,
                        city: contact.addr.city,
                        sp: contact.addr.sp,
                        pc: contact.addr.pc,
                        cc: contact.addr.cc
                    }
                },
                voice: contact.voice,
                fax: contact.fax,
                email: contact.email
            }
        })
    })
    let domain: Domain = {
        name: body.name,
        period: {
            unit: (body.period.unit === 'y' || body.period.unit === "Y") ? DomainPeriodUnits.YEARS : DomainPeriodUnits.MONTHS,
            value: body.period.value
        },
        ns: hosts,
        registrant: Config.get("cocca.auth.client"),
        contact: contacts,
        authInfo: {
            pw: body.authInfo.pw,
        }
    }
    controller.registerDomain(domain, body.payer).then((result) => {
        response.status(200).json({ domain: domain, payer: body.payer })
    }).catch((err) => {
        response.send(err)
    })

}

const renewDomain = (request: Express.Request, response: Express.Response) => {
    let body = request.body
    let domain: Domain = {
        name: body.domain.name,
        period: {
            unit: DomainPeriodUnits.YEARS,
            value: 0
        },
        ns: [],
        registrant: Config.get("cocca.auth.client"),
        contact: [],
        authInfo: {
            pw: "",
        },
        curExpDate: body.domain.curExpDate
    }

    let period = {
        unit: (body.period.unit === 'y' || body.period.unit === "Y") ? DomainPeriodUnits.YEARS : DomainPeriodUnits.MONTHS,
        value: body.period.value
    }

    controller.renewDomain(domain, period).then((res) => {
        response.send({ domain: domain, period: period })
    }).catch(err => {
        response.send(err)
    })

}

const getContactDomains = (request: Express.Request, response: Express.Response) => {
    let id = request.params.id
    controller.getContactDomains(id).then((res) => {
        response.send({ input: id, res: res })
    }).catch((err) => {
        response.send(err)
    })
}

export {
    whois,
    registerDomain,
    renewDomain,
    getContactDomains
}