"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactDomains = exports.renewDomain = exports.registerDomain = exports.whois = void 0;
const config_1 = __importDefault(require("config"));
const Models = __importStar(require("./models"));
const Utils = __importStar(require("./utils"));
// import * as  Controller from './app/controller/controller'
// import * as  controller from './app/controller/controller'
const whois = (request, response) => {
    let body = request.body;
    let names = body.names;
    // Controller.whois(names).then((out) => {
    //     response.status(200).send(out)
    // }).catch((err) => {
    //     response.status(400).send(err)
    // })
};
exports.whois = whois;
const registerDomain = (request, response) => {
    let body = request.body;
    let hosts = [];
    body.ns.forEach((ns) => {
        let addr = [];
        ns.addr.forEach((a) => {
            addr.push({
                type: (a.isV4) ? Models.IpAddresseType.IPV4 : Models.IpAddresseType.IPV6,
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
        });
    });
    let domain = {
        name: body.name,
        period: {
            unit: (body.period.unit === 'y' || body.period.unit === "Y") ? Models.DomainPeriodUnits.YEARS : Models.DomainPeriodUnits.MONTHS,
            value: body.period.value
        },
        ns: hosts,
        registrant: config_1.default.get("cocca.auth.client"),
        contact: contacts,
        authInfo: {
            pw: body.authInfo.pw,
        }
    };
    // controller.registerDomain(domain, body.payer).then((result) => {
    //     response.status(200).json({ domain: domain, payer: body.payer })
    // }).catch((err) => {
    //     response.send(err)
    // })
};
exports.registerDomain = registerDomain;
const renewDomain = (request, response) => {
    let body = request.body;
    let domain = {
        name: body.domain.name,
        period: {
            unit: Models.DomainPeriodUnits.YEARS,
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
        unit: (body.period.unit === 'y' || body.period.unit === "Y") ? Models.DomainPeriodUnits.YEARS : Models.DomainPeriodUnits.MONTHS,
        value: body.period.value
    };
    // controller.renewDomain(domain, period).then((res) => {
    //     response.send({ domain: domain, period: period })
    // }).catch(err => {
    //     response.send(err)
    // })
};
exports.renewDomain = renewDomain;
const getContactDomains = (request, response) => {
    let id = request.params.id;
    // controller.getContactDomains(id).then((res) => {
    //     response.send({ input: id, res: res })
    // }).catch((err) => {
    //     response.send(err)
    // })
};
exports.getContactDomains = getContactDomains;
