const config = require('config')

let clTRID = config.get("cocca.clTRID")


const checkById = (id) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <check>
                <contact:check xmlns:contact="urn:ietf:params:xml:ns:contact-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
    contact-1.0.xsd">
                    <contact:id>${id}</contact:id>
                </contact:check>
            </check>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`
}

const checkByEmail = (email) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <check>
                <contact:check xmlns:contact="urn:ietf:params:xml:ns:contact-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
    contact-1.0.xsd">
                    <contact:email>${email}</contact:email>
                </contact:check>
            </check>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`
}

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
    </epp>`
}

const getInfoByEmail = (email) =>{
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
    </epp>`
}

const create= (contact) =>{
    let streets = Array(contact.street)
    let street = ''
    streets.forEach((ele) =>{
        street.concat(`<contact:street>${ele}</contact:street> \n`)
    })
        return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <create>
                <contact:create xmlns:contact="urn:ietf:params:xml:ns:contact-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0 contact-1.0.xsd">
                    <contact:id>${contact.id}</contact:id>
                    <contact:postalInfo type="loc">
                        <contact:name>${contact.name}</contact:name>
                        <contact:org>${contact.org}</contact:org>
                        <contact:addr>
                            ${street}
                            <contact:city>${contact.city}</contact:city>
                            <contact:pc>${contact.pc}</contact:pc>
                            <contact:cc>${contact.cc}</contact:cc>
                        </contact:addr>
                    </contact:postalInfo>
                    <contact:voice x="">${contact.voice}</contact:voice>
                    <contact:fax x="">${contact.fax}</contact:fax>
                    <contact:email>${contact.email}</contact:email>
                    <contact:disclose flag="0">
                        <contact:voice/>
                        <contact:email/>
                    </contact:disclose>
                </contact:create>
            </create>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`

}


const update = (contact) =>{
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <update>
                "Update code here"
            </update>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`
}

module.exports = {
    checkByEmail,
    checkById,
    getInfoByEmail,
    getInfoById,
    create,
    update
}