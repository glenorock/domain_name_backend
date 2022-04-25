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
const whois = (req, res) => {
    try {
        let body = req.body;
        let names = body.names;
        controller_1.default.whois(names).then((out) => {
            res.status(200).send(out);
        }).catch((err) => {
            res.status(400).send(err);
        });
    }
    catch (err) {
        res.status(400).send(err);
    }
};
const registerDomain = (req, res) => {
    let body = req.body;
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
    res.status(200).json(domain);
};
exports.default = {
    whois,
    registerDomain
};
