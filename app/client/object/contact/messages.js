"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
let clTRID = config_1.default.get("cocca.clTRID");
const checkById = (id) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <check>
                <contact:check xmlns:contact="urn:ietf:params:xml:ns:contact-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0 contact-1.0.xsd">
                    <contact:id>${id}</contact:id>
                </contact:check>
            </check>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
const checkByEmail = (email) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <check>
                <contact:check xmlns:contact="urn:ietf:params:xml:ns:contact-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0 contact-1.0.xsd">
                    <contact:email>${email}</contact:email>
                </contact:check>
            </check>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
const getInfoById = (id) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <info>
                <contact:info xmlns:contact="urn:ietf:params:xml:ns:contact-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
    contact-1.0.xsd">
                    <contact:id>${id}</contact:id>
                </contact:info>
            </info>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
const getInfoByEmail = (email) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <info>
                <contact:info xmlns:contact="urn:ietf:params:xml:ns:contact-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
    contact-1.0.xsd">
                    <contact:id>${email}</contact:id>
                </contact:info>
            </info>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
const getDomains = (id) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <info>
                <domain:info xmlns:domain="urn:ietf:params:xml:ns:domain-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0
    domain-1.0.xsd">
                    <domain:contact ">${id}</domain:contact>
                </domain:info>
            </info>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
const create = (contact) => {
    let streets = contact.postalInfo.addr.street;
    let street = '';
    streets.forEach((ele) => {
        street.concat(`<contact:street>${ele}</contact:street> \n`);
    });
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <create>
                <contact:create xmlns:contact="urn:ietf:params:xml:ns:contact-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0 contact-1.0.xsd">
                    <contact:id>${contact.id}</contact:id>
                    <contact:postalInfo type="${contact.postalInfo.type}">
                        <contact:name>${contact.postalInfo.name}</contact:name>
                        <contact:org>${contact.postalInfo.org}</contact:org>
                        <contact:addr>
                            ${street}
                            <contact:city>${contact.postalInfo.addr.city}</contact:city>
                            <contact:pc>${contact.postalInfo.addr.pc}</contact:pc>
                            <contact:cc>${contact.postalInfo.addr.cc}</contact:cc>
                        </contact:addr>
                    </contact:postalInfo>
                    <contact:voice x="">${contact.voice}</contact:voice>
                    <contact:fax x="">${contact.fax}</contact:fax>
                    <contact:email>${contact.email}</contact:email>
                </contact:create>
            </create>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
const update = (contact) => {
    let streets = contact.postalInfo.addr.street;
    let street = '';
    streets.forEach((ele) => {
        street.concat(`<contact:street>${ele}</contact:street> \n`);
    });
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <update>
                <contact:update
                xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"
                xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
                contact-1.0.xsd">
                    <contact:id>${contact.id}</contact:id>
                    <contact:chg>
                        <contact:postalInfo type="${contact.postalInfo.type}">
                            <contact:name>${contact.postalInfo.name}</contact:name>
                            <contact:org>${contact.postalInfo.org}</contact:org>
                            <contact:addr>
                                ${street}
                                <contact:city>${contact.postalInfo.addr.city}</contact:city>
                                <contact:pc>${contact.postalInfo.addr.pc}</contact:pc>
                                <contact:cc>${contact.postalInfo.addr.cc}</contact:cc>
                            </contact:addr>
                        </contact:postalInfo>
                        <contact:voice x="">${contact.voice}</contact:voice>
                        <contact:fax x="">${contact.fax}</contact:fax>
                        <contact:email>${contact.email}</contact:email>
                    </contact:chg>
                </contact:update>
            </update>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
exports.default = {
    checkByEmail,
    checkById,
    getInfoByEmail,
    getInfoById,
    create,
    update,
    getDomains
};
