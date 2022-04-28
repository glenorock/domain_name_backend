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
    return `<hello/>`;
};
exports.hello = hello;
const login = () => {
    return `<command>
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
        </command>`;
};
exports.login = login;
const logout = () => {
    return `<command>
            <logout/>
            <clTRID>${clTRID}</clTRID>
        </command>`;
};
exports.logout = logout;
