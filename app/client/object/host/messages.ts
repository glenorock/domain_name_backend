import { Host } from "../../../models/models"
const config = require('config')

let clTRID = config.get("cocca.clTRID")

const check = (name:String) =>{
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <check>
                <host:check xmlns:host="urn:ietf:params:xml:ns:host-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:host-1.0
    host-1.0.xsd">
                    <host:name>${name}</host:name>
                </host:check>
            </check>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`
}

const create = (host:Host) =>{
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <create>
                <host:create xmlns:host="urn:ietf:params:xml:ns:host-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:host-1.0
    host-1.0.xsd">
                    <host:name> ${host.name} </host:name>
                    ${
                        host.addr.forEach((add) =>{
                            return `<host:addr ip=${add.type}> ${add.addresse} </host:addr>`
                        })    
                    }
                </host:create>
            </create>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`
}

const info = (name:String) =>{
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <info>
                <host:info xmlns:host="urn:ietf:params:xml:ns:host-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:host-1.0
    host-1.0.xsd">
                    <host:name>${name}</host:name>
                </host:info>
            </info>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`
}

const update = (host:Host) =>{
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <update>
                <host:update xmlns:host="urn:ietf:params:xml:ns:host-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:host-1.0 host-1.0.xsd">
                    <host:name>${host.name}</host:name>
                    <host:add>
                    ${
                        host.addr.forEach((add) =>{
                            return `<host:addr ip=${add.type}> ${add.addresse} </host:addr>`
                        })    
                    }
                    </host:add>
                    <host:rem>
                    ${
                        host.addr.forEach((add) =>{
                            return `<host:addr ip=${add.type}> ${add.addresse} </host:addr>`
                        })    
                    }
                    </host:rem>
                </host:update>
            </update>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`
}

module.exports = {
    check,
    create,
    info,
    update
}