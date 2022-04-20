import { Host } from "./hosts"
import { Contact } from "./contact"

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


export { Domain,DomainContactType,DomainPeriodUnits}