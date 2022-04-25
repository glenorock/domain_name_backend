import * as _whois from "./services/whois"
import * as _registerDomain from './services/registerDomain'
import * as _renewDomain from './services/renewDomain'
import * as _getContactDomains from './services/getContactDomains'

let whois =  _whois.whois 
let registerDomain =  _registerDomain.register 
let renewDomain =  _renewDomain.renew 
let getContactDomains =  _getContactDomains.getDomains

export {
    whois,
    registerDomain,
    renewDomain,
    getContactDomains
}
