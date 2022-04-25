import * as _whois from "./services/whois"
import * as _registerDomain from './services/registerDomain'
import * as _renewDomain from './services/renewDomain'
import * as _getContactDomains from './services/getContactDomains'
export default {
    whois: _whois.whois,
    registerDomain: _registerDomain.register,
    renewDomain: _renewDomain.renew,
    getContactDomains: _getContactDomains.getDomains
}
