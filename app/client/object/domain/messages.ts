import { Domain, DomainPeriodUnits } from "../../../models/domain"
const config = require('config')

let clTRID = config.get("cocca.clTRID")

const check = (names:String[]) =>{
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
            <command>
                <check>
                    <domain:check xmlns:domain="urn:ietf:params:xml:ns:domain-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0
        domain-1.0.xsd">
                        ${
                            names.forEach((name) =>{
                                return `<domain:name>${name}</domain:name>`
                            })
                        }
                    </domain:check>
                </check>
                <clTRID>${clTRID}</clTRID>
            </command>
        </epp>`
}

const info = (names:String[]) =>{
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <info>
                <domain:info xmlns:domain="urn:ietf:params:xml:ns:domain-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0
    domain-1.0.xsd">
                    ${
                        names.forEach((name) =>{
                            return `<domain:name hosts="all">${name}</domain:name>`
                        })
                    }
                </domain:info>
            </info>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`
}

const create = (domain: Domain) =>{
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
                            domain.ns.forEach((host) =>{
                                return `<domain:hostObj>${host.name}</domain:hostObj>`
                            })
                        }
                    </domain:ns>
                    <domain:registrant>${domain.registrant}</domain:registrant>
                    ${
                        domain.contact.forEach((contact) =>{
                            return `<domain:contact type="${contact.type}">${contact.value}</domain:contact>`
                        })
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

const renew = (domain:Domain,period:{unit:DomainPeriodUnits,value:number}) =>{
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

const update = (domain:Domain) =>{
    return `update messages for ${domain}`
}

const addProperty  = (domain:Domain) =>{
    return `message`
}


const removeProperty  = (domain:Domain) =>{
    return `message`
}

const transfer = (domain:Domain) =>{
    return `transfer message for ${domain}`
}

export {
    check,
    info,
    create,
    renew,
    update,
    transfer
}