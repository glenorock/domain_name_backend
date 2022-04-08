const config = require('config')

let clientId = config.get("cocca.auth.client")
let password = config.get("cocca.auth.password")
let clTRID = config.get("cocca.clTRID")


const hello = () => {
    return `<?xml version='1.0' encoding='UTF-8' standalone='no'?>
    <epp xmlns='urn:ietf:params:xml:ns:epp-1.0'
        xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd'>
        <hello/>
    </epp>`
}

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
    </epp>`
}

const logout = () => {
    return `<?xml version='1.0' encoding='UTF-8' standalone='no'?>
    <epp xmlns='urn:ietf:params:xml:ns:epp-1.0'
        xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd'>
        <command>
            <logout/>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`
}

const Messages = {
    helloMessage: hello,
    loginMessage: login,
    logoutMessage: logout,
}

module.exports = Messages