type Contact = {
    id: String,
    name: String,
    org: String,
    street: Array<String>,
    city: String,
    pc: String,
    cc: String,
    voice: String,
    fax: String,
    email: String,
}

type Host = {
    name: String,
    ipv4: Array<String>,
    ipv6: String
}

type Domain = {
    name: String,
    period: Number,
    client: String,
    hosts: Array<Host>
    contactAdmin: Contact,
    contactTech: Contact,
    password: String,
    expDate?: Date
}

export {Contact,Host,Domain}