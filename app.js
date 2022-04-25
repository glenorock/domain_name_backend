"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const domain_1 = require("./app/models/domain");
const hosts_1 = require("./app/models/hosts");
const contact_1 = require("./app/models/contact");
const generator_1 = __importDefault(require("./app/utils/generator"));
const controller_1 = __importDefault(require("./app/controller/controller"));
const controller_2 = __importDefault(require("./app/controller/controller"));
const whois = (request, response) => {
    let body = request.body;
    let names = body.names;
    controller_1.default.whois(names).then((out) => {
        response.status(200).send(out);
    }).catch((err) => {
        response.status(400).send(err);
    });
};
const registerDomain = (request, response) => {
    let body = request.body;
    let hosts = [];
    body.ns.forEach((ns) => {
        let addr = [];
        ns.addr.forEach((a) => {
            addr.push({
                type: (a.isV4) ? hosts_1.IpAddresseType.IPV4 : hosts_1.IpAddresseType.IPV6,
                addresse: a.value
            });
        });
        hosts.push({
            name: ns.name,
            addr: addr
        });
    });
    let contacts = [];
    body.contact.forEach((contact) => {
        contacts.push({
            type: (contact.isAdmin) ? domain_1.DomainContactType.ADMIN : domain_1.DomainContactType.TECH,
            value: {
                id: generator_1.default.generateContactIdentifier(contact.name),
                postalInfo: {
                    type: (contact.type === "int") ? contact_1.PostalInfoType.INT : contact_1.PostalInfoType.LOC,
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
        });
    });
    let domain = {
        name: body.name,
        period: {
            unit: (body.period.unit === 'y' || body.period.unit === "Y") ? domain_1.DomainPeriodUnits.YEARS : domain_1.DomainPeriodUnits.MONTHS,
            value: body.period.value
        },
        ns: hosts,
        registrant: config_1.default.get("cocca.auth.client"),
        contact: contacts,
        authInfo: {
            pw: body.authInfo.pw,
        }
    };
    controller_2.default.registerDomain(domain, body.payer).then((result) => {
        response.status(200).json({ domain: domain, payer: body.payer });
    }).catch((err) => {
        response.send(err);
    });
};
const renewDomain = (request, response) => {
    let body = request.body;
    let domain = {
        name: body.domain.name,
        period: {
            unit: domain_1.DomainPeriodUnits.YEARS,
            value: 0
        },
        ns: [],
        registrant: config_1.default.get("cocca.auth.client"),
        contact: [],
        authInfo: {
            pw: "",
        },
        curExpDate: body.domain.curExpDate
    };
    let period = {
        unit: (body.period.unit === 'y' || body.period.unit === "Y") ? domain_1.DomainPeriodUnits.YEARS : domain_1.DomainPeriodUnits.MONTHS,
        value: body.period.value
    };
    controller_2.default.renewDomain(domain, period).then((res) => {
        response.send({ domain: domain, period: period });
    }).catch(err => {
        response.send(err);
    });
};
const getContactDomains = (request, response) => {
    let id = request.params.id;
    controller_2.default.getContactDomains(id).then((res) => {
        response.send({ input: id, res: res });
    }).catch((err) => {
        response.send(err);
    });
};
exports.default = {
    whois,
    registerDomain,
    renewDomain,
    getContactDomains
};
