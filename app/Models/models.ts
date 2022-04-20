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
    IPV4="v4",
    IPV6="v6"
}

type IpAddresse = {
    type: IpAddresseType,
    addresse: string
}

type Host = {
    name: string,
    addr: IpAddresse[],
}

enum DomainPeriodUnits{
    YEARS='y' ,
    MONTHS='m'
}

enum DomainContactType {
    ADMIN = 'admin',
    TECH = 'tech'
}
type Domain = {
    name: string,
    period: {
        unit:DomainPeriodUnits,
        value: number
    },
    ns: Host[],
    registrant: string,
    contact:{
        type:string,
        value: Contact
    }[]
    authInfo:{
        pw: string,
    }
    curExpDate?: string
}

export { Contact, Host, Domain,IpAddresse,IpAddresseType,DomainContactType,DomainPeriodUnits}