
type Contact = {
    id: string,
    postalInfo: {
        name: string,
        org: string,
        addr: {
            street: string[],
            city: string,
            pc: string,
            cc: string,
        }
    }
    voice: string,
    fax: string,
    email: string,
}

type Host = {
    name: string,
    ipv4: String[],
    ipv6: string
}

type Domain = {
    name: string,
    period: number,
    client: string,
    hosts: Host[]
    contactAdmin: Contact,
    contactTech: Contact,
    password: string,
    expDate?: Date
}

export { Contact, Host, Domain}