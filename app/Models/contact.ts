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

export {Contact}