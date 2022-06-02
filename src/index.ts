import Express from 'express'
import Config from 'config'
import * as Models from './models'
import * as Utils from './utils'
// import * as  Controller from './app/controller/controller'
// import * as  controller from './app/controller/controller'

const whois = (request: Express.Request, response: Express.Response) => {
    let body = request.body
    let names = body.names
    // Controller.whois(names).then((out) => {
    //     response.status(200).send(out)
    // }).catch((err) => {
    //     response.status(400).send(err)
    // })
}

const registerDomain = (request: Express.Request, response: Express.Response) => {
    let body = request.body
    let hosts: Models.Host[] = []
    body.ns.forEach((ns: any) => {
        let addr: Models.IpAddresse[] = []
        ns.addr.forEach((a: any) => {
            addr.push({
                type: (a.isV4) ? Models.IpAddresseType.IPV4 : Models.IpAddresseType.IPV6,
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
    let contacts: { type: string, value: Models.Contact }[] = []
    body.contact.forEach((contact: any) => {
        contacts.push({
            type: (contact.isAdmin) ? Models.DomainContactType.ADMIN : Models.DomainContactType.TECH,
            value: {
                id: Utils.Generator.generateContactIdentifier(contact.name),
                postalInfo: {
                    type: (contact.type === "int") ? Models.PostalInfoType.INT : Models.PostalInfoType.LOC,
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
    let domain: Models.Domain = {
        name: body.name,
        period: {
            unit: (body.period.unit === 'y' || body.period.unit === "Y") ? Models.DomainPeriodUnits.YEARS : Models.DomainPeriodUnits.MONTHS,
            value: body.period.value
        },
        ns: hosts,
        registrant: Config.get("cocca.auth.client"),
        contact: contacts,
        authInfo: {
            pw: body.authInfo.pw,
        }
    }
    // controller.registerDomain(domain, body.payer).then((result) => {
    //     response.status(200).json({ domain: domain, payer: body.payer })
    // }).catch((err) => {
    //     response.send(err)
    // })

}

const renewDomain = (request: Express.Request, response: Express.Response) => {
    let body = request.body
    let domain: Models.Domain = {
        name: body.domain.name,
        period: {
            unit: Models.DomainPeriodUnits.YEARS,
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
        unit: (body.period.unit === 'y' || body.period.unit === "Y") ? Models.DomainPeriodUnits.YEARS : Models.DomainPeriodUnits.MONTHS,
        value: body.period.value
    }

    // controller.renewDomain(domain, period).then((res) => {
    //     response.send({ domain: domain, period: period })
    // }).catch(err => {
    //     response.send(err)
    // })

}

const getContactDomains = (request: Express.Request, response: Express.Response) => {
    let id = request.params.id
    // controller.getContactDomains(id).then((res) => {
    //     response.send({ input: id, res: res })
    // }).catch((err) => {
    //     response.send(err)
    // })
}

export {
    whois,
    registerDomain,
    renewDomain,
    getContactDomains
}