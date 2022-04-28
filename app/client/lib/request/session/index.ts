import config from "config"

let clientId = config.get("cocca.auth.client")
let password = config.get("cocca.auth.password")
let clTRID = config.get("cocca.clTRID")

export const hello = () => {
    return `<hello/>`
}

export const login = () => {
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
        </command>`
}

export const logout = () => {
    return `<command>
            <logout/>
            <clTRID>${clTRID}</clTRID>
        </command>`
}