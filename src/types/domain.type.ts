import { Host } from "./host.type";
import { Contact } from "./contact.type";

export type Domain  = {
    name: string,
    period: number,
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