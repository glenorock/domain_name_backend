import {PostalInfoType} from './enums/postalInfoType.enum';

export type Contact =  {
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
};