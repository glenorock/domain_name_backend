"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remAddr = exports.addAddr = exports.create = exports.info = exports.check = void 0;
const config_1 = __importDefault(require("config"));
let clTRID = config_1.default.get("cocca.clTRID");
const check = (names) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <check>
                <host:check xmlns:host="urn:ietf:params:xml:ns:host-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:host-1.0
    host-1.0.xsd">
                    ${names.forEach((name) => {
        return `<host:name>${name}</host:name>`;
    })}
                </host:check>
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
                <host:info xmlns:host="urn:ietf:params:xml:ns:host-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:host-1.0
    host-1.0.xsd">
                    ${names.forEach((name) => {
        return `<host:name>${name}</host:name>`;
    })}
                </host:info>
            </info>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
exports.info = info;
const create = (host) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <create>
                <host:create xmlns:host="urn:ietf:params:xml:ns:host-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:host-1.0
    host-1.0.xsd">
                    <host:name> ${host.name} </host:name>
                    ${host.addr.forEach((add) => {
        return `<host:addr ip=${add.type}> ${add.addresse} </host:addr>`;
    })}
                </host:create>
            </create>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
exports.create = create;
const addAddr = (host, addrs) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <update>
                <host:update xmlns:host="urn:ietf:params:xml:ns:host-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:host-1.0 host-1.0.xsd">
                    <host:name>${host.name}</host:name>
                    <host:add>
                    ${addrs.forEach((addr) => {
        return `<host:addr ip=${addr.type}> ${addr.addresse} </host:addr>`;
    })}
                    </host:add>
                </host:update>
            </update>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
exports.addAddr = addAddr;
const remAddr = (host, addrs) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <update>
                <host:update xmlns:host="urn:ietf:params:xml:ns:host-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:host-1.0 host-1.0.xsd">
                    <host:name>${host.name}</host:name>
                    <host:rem>
                    ${addrs.forEach((addr) => {
        return `<host:addr ip=${addr.type}> ${addr.addresse} </host:addr>`;
    })}
                    </host:rem>
                </host:update>
            </update>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
exports.remAddr = remAddr;
