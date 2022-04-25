"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.hello = void 0;
const config_1 = __importDefault(require("config"));
let clientId = config_1.default.get("cocca.auth.client");
let password = config_1.default.get("cocca.auth.password");
let clTRID = config_1.default.get("cocca.clTRID");
const hello = () => {
    return `<?xml version='1.0' encoding='UTF-8' standalone='no'?>
    <epp xmlns='urn:ietf:params:xml:ns:epp-1.0'
        xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd'>
        <hello/>
    </epp>`;
};
exports.hello = hello;
const login = () => {
    return `<?xml version='1.0' encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <login>
                <clID>${clientId}</clID>
                <pw>${password}</pw>
                <options>
                    <version>1.0</version>
                    <lang>en</lang>
                </options>
                <svcs>
                    <objURI>urn:ietf:params:xml:ns:domain-1.0</objURI>
                    <objURI>urn:ietf:params:xml:ns:contact-1.0</objURI>
                    <objURI>urn:ietf:params:xml:ns:host-1.0</objURI>
                    <svcExtension>
                        <extURI>urn:ietf:params:xml:ns:secDNS-1.0</extURI>
                        <extURI>urn:ietf:params:xml:ns:secDNS-1.1</extURI>
                        <extURI>urn:se:iis:xml:epp:iis-1.2</extURI>
                    </svcExtension>
                </svcs>
            </login>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
exports.login = login;
const logout = () => {
    return `<?xml version='1.0' encoding='UTF-8' standalone='no'?>
    <epp xmlns='urn:ietf:params:xml:ns:epp-1.0'
        xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd'>
        <command>
            <logout/>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`;
};
exports.logout = logout;
