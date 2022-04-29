import { Domain, DomainPeriodUnits } from "../../../../../models/index"
import config from 'config'

let clTRID = config.get("cocca.clTRID")

export const check = (names:string[]) =>{
    let domain_name:string = ""
    names.forEach((name) =>{
        domain_name = domain_name + `<domain:name>${name}</domain:name> \n `
    })
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
            <command>
                <check>
                    <domain:check xmlns:domain="urn:ietf:params:xml:ns:domain-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0
        domain-1.0.xsd">
                        ${  
                            domain_name
                        }
                    </domain:check>
                </check>
                <clTRID>${clTRID}</clTRID>
            </command>
        </epp>`
}

export const info = (names:string[]) =>{
    let domain_name:string = ""
    names.forEach((name) =>{
        domain_name = domain_name + `<domain:name>${name}</domain:name> \n `
    })
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <info>
                <domain:info xmlns:domain="urn:ietf:params:xml:ns:domain-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0
    domain-1.0.xsd">
                    ${
                        domain_name
                    }
                </domain:info>
            </info>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`
}

export const create = (domain: Domain) =>{
    let domain_contact:string = ""
    let domain_ns: string = ""
    domain.ns.forEach((host) =>{
        domain_ns = domain_ns + `<domain:hostObj>${host.name}</domain:hostObj>`
    })
    domain.contact.forEach((contact) =>{
        domain_contact = domain_contact +  `<domain:contact type="${contact.type}">${contact.value}</domain:contact>`
    })
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <create>
                <domain:create xmlns:domain="urn:ietf:params:xml:ns:domain-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0 domain-1.0.xsd">
                    <domain:name>${domain.name}</domain:name>
                    <domain:period unit="y">${domain.period}</domain:period>
                    <domain:ns>
                        ${
                            domain_ns
                        }
                    </domain:ns>
                    <domain:registrant>${domain.registrant}</domain:registrant>
                    ${
                        domain_contact
                    }
                    <domain:authInfo>
                        <domain:pw>${domain.authInfo.pw}</domain:pw>
                    </domain:authInfo>
                </domain:create>
            </create>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`
}

export const renew = (domain:Domain,period:{unit:DomainPeriodUnits,value:number}) =>{
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
    </epp>`
}

export const update = (domain:Domain) =>{
    return `update messages for ${domain}`
}

export const addProperty  = (domain:Domain) =>{
    return `message`
}


export const removeProperty  = (domain:Domain) =>{
    return `message`
}

export const transfer = (domain:Domain) =>{
    return `transfer message for ${domain}`
}