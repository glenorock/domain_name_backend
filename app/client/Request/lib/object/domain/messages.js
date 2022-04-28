"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transfer = exports.update = exports.renew = exports.create = exports.info = exports.check = void 0;
const config = require('config');
let clTRID = config.get("cocca.clTRID");
const check = (names) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
            <command>
                <check>
                    <domain:check xmlns:domain="urn:ietf:params:xml:ns:domain-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0
        domain-1.0.xsd">
                        ${names.forEach((name) => {
        return `<domain:name>${name}</domain:name>`;
    })}
                    </domain:check>
                </check>
                <clTRID>${clTRID}</clTRID>
            </command>
        </epp>`;
};
exports.check = check;
const info = (names) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <info>
                <domain:info xmlns:domain="urn:ietf:params:xml:ns:domain-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0
    domain-1.0.xsd">
                    ${names.forEach((name) => {
        return `<domain:name hosts="all">${name}</domain:name>`;
    })}
                </domain:info>
            </info>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
exports.info = info;
const create = (domain) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <create>
                <domain:create xmlns:domain="urn:ietf:params:xml:ns:domain-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0 domain-1.0.xsd">
                    <domain:name>${domain.name}</domain:name>
                    <domain:period unit="y">${domain.period}</domain:period>
                    <domain:ns>
                        ${domain.ns.forEach((host) => {
        return `<domain:hostObj>${host.name}</domain:hostObj>`;
    })}
                    </domain:ns>
                    <domain:registrant>${domain.registrant}</domain:registrant>
                    ${domain.contact.forEach((contact) => {
        return `<domain:contact type="${contact.type}">${contact.value}</domain:contact>`;
    })}
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
const removeProperty = (domain) => {
    return `message`;
};
const transfer = (domain) => {
    return `transfer message for ${domain}`;
};
exports.transfer = transfer;
