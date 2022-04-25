"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xml_1 = __importDefault(require("../app/utils/xml"));
let xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
    <command>
        <create>
            <domain:create xmlns:domain="urn:ietf:params:xml:ns:domain-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0
domain-1.0.xsd">
                <domain:name>domain.name</domain:name>
                <domain:period unit="y">domain.period</domain:period>
                <domain:ns>
                    <domain:hostObj>domain.host</domain:hostObj>
                </domain:ns>
                <domain:registrant>domain.client</domain:registrant>
                <domain:contact type="admin">domain.contact.admin</domain:contact>
                <domain:contact type="tech">domain.contact.tech</domain:contact>
                <domain:authInfo>
                    <domain:pw>domain.password</domain:pw>
                </domain:authInfo>
            </domain:create>
        </create>
        <clTRID>clTRID</clTRID>
    </command>
</epp>`;
console.log(xml_1.default.toJson(xml));
