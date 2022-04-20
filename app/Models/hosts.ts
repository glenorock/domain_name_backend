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

export {IpAddresse,IpAddresseType,Host}