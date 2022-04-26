/**
 * @module Models
 */

export enum PostalInfoType {
    INT = "int",
    LOC = "loc"
}

export interface Contact {
    id: string,
    postalInfo: {
        type: PostalInfoType
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

export enum IpAddresseType {
    IPV4 = "v4",
    IPV6 = "v6"
}

export interface IpAddresse {
    type: IpAddresseType,
    addresse: string
}

export interface Host {
    name: string,
    addr: IpAddresse[],
}

export enum EventTypes {
    AccountCreation,
    DomainCreation,
    DomainUpdate,
    ContactCreation
}

export interface Event {
    type: EventTypes,
    data: any
}

export enum DomainPeriodUnits {
    YEARS = 'y',
    MONTHS = 'm'
}

export enum DomainContactType {
    ADMIN = 'admin',
    TECH = 'tech'
}
export interface Domain {
    name: string,
    period: {
        unit: DomainPeriodUnits,
        value: number
    },
    ns: Host[],
    registrant: string,
    contact: {
        type: string,
        value: Contact
    }[]
    authInfo: {
        pw: string,
    }
    curExpDate?: string
}
export interface Mail {
    subject: string,
    message: string,
    receivers: string[]
}