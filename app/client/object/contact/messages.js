const config = require('config')

let clTRID = config.get("cocca.clTRID")


const checkContactById = (id) => {
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

const checkContactManyById = (ids) => {
    let list = Array(ids)
    let tmp = ''
    list.forEach((id) => {
        tmp.concat(`<contact:id>${id}</contact:id>\n`)
    })
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <check>
                <contact:check xmlns:contact="urn:ietf:params:xml:ns:contact-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
    contact-1.0.xsd">
                    ${tmp}
                </contact:check>
            </check>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`
}

const checkContactByEmail = (email) => {
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

const checkContactManyByEmail = (emails) => {
    let list = Array(emails)
    let tmp = ''
    list.forEach((email) => {
        tmp.concat(`<contact:email>${email}</contact:email>\n`)
    })
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <check>
                <contact:check xmlns:contact="urn:ietf:params:xml:ns:contact-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
    contact-1.0.xsd">
                    ${tmp}
                </contact:check>
            </check>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`
}

const getContactInfoById = (id) => {
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

const getContactInfoByEmail = (email) =>{
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

const createOneContact = (contact) =>{
    let streets = Array(contact.street)
    let street = ''
    streets.forEach((ele) =>{
        street.concat(`<contact:street>${ele}</contact:street> \n`)
    })
    return `<contact:create xmlns:contact="urn:ietf:params:xml:ns:contact-1.0" xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
    contact-1.0.xsd">
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
                </contact:create>`
}
const createContact = (contact) =>{
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <create>
                ${createOneContact(contact)}
            </create>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`

}

const createManyContacts = (contacts) =>{
    const list = Array(contacts)
    let tmp = ''
    list.forEach((ele)=>{
        tmp.concat(createOneContact(contact)).concat("\n")
    })
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
        <command>
            <create>
                ${tmp}
            </create>
            <clTRID>${clTRID}</clTRID>
        </command>
    </epp>`

}

const updateContact = (contact) =>{
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
    checkContactById,
    checkContactByEmail,
    checkContactManyByEmail,
    checkContactManyById,
    getContactInfoByEmail,
    getContactInfoById,
    createContact,
    createManyContacts,
    updateContact
}