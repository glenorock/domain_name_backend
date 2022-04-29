"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transfer = exports.removeProperty = exports.addProperty = exports.update = exports.renew = exports.create = exports.info = exports.check = void 0;
const config_1 = __importDefault(require("config"));
let clTRID = config_1.default.get("cocca.clTRID");
const check = (names) => {
    let domain_name = "";
    names.forEach((name) => {
        domain_name = domain_name + `<domain:name>${name}</domain:name> \n `;
    });
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
            <command>
                <check>
                    <domain:check xmlns:domain="urn:ietf:params:xml:ns:domain-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0
        domain-1.0.xsd">
                        ${domain_name}
                    </domain:check>
                </check>
                <clTRID>${clTRID}</clTRID>
            </command>
        </epp>`;
};
exports.check = check;
const info = (names) => {
    let domain_name = "";
    names.forEach((name) => {
        domain_name = domain_name + `<domain:name>${name}</domain:name> \n `;
    });
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <info>
                <domain:info xmlns:domain="urn:ietf:params:xml:ns:domain-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0
    domain-1.0.xsd">
                    ${domain_name}
                </domain:info>
            </info>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
exports.info = info;
const create = (domain) => {
    let domain_contact = "";
    let domain_ns = "";
    domain.ns.forEach((host) => {
        domain_ns = domain_ns + `<domain:hostObj>${host.name}</domain:hostObj>`;
    });
    domain.contact.forEach((contact) => {
        domain_contact = domain_contact + `<domain:contact type="${contact.type}">${contact.value}</domain:contact>`;
    });
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <create>
                <domain:create xmlns:domain="urn:ietf:params:xml:ns:domain-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0 domain-1.0.xsd">
                    <domain:name>${domain.name}</domain:name>
                    <domain:period unit="y">${domain.period}</domain:period>
                    <domain:ns>
                        ${domain_ns}
                    </domain:ns>
                    <domain:registrant>${domain.registrant}</domain:registrant>
                    ${domain_contact}
                    <domain:authInfo>
                        <domain:pw>${domain.authInfo.pw}</domain:pw>
                    </domain:authInfo>
                </domain:create>
            </create>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
exports.create = create;
const renew = (domain, period) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <renew>
                <domain:renew xmlns:domain="urn:ietf:params:xml:ns:domain-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0
    domain-1.0.xsd">
                    <domain:name>${domain.name}</domain:name>
                    <domain:curExpDate>${domain.curExpDate}</domain:curExpDate>
                    <domain:period unit="${period.unit}">${period.value}</domain:period>
                </domain:renew>
            </renew>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
exports.renew = renew;
const update = (domain) => {
    return `update messages for ${domain}`;
};
exports.update = update;
const addProperty = (domain) => {
    return `message`;
};
exports.addProperty = addProperty;
const removeProperty = (domain) => {
    return `message`;
};
exports.removeProperty = removeProperty;
const transfer = (domain) => {
    return `transfer message for ${domain}`;
};
exports.transfer = transfer;
