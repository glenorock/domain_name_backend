type Contact = {
    id: string,
    postalInfo: {
        name: string,
        org: string,
        addr: {
            street: string[],
            city: string,
            sp: string,
            pc: string,
            cc: string,
        }
    }
    voice: string,
    fax: string,
    email: string,
}

enum IpAddresseType {
    "v4",
    "v6"
}

type Host = {
    name: string,
    addr: {
        type: IpAddresseType,
        addresse: string
    }[],
}



export { Contact, Host, Domain,IpAddresseType}