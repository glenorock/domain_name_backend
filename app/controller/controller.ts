import _whois from "./services/whois"
import _registerDomain from './services/registerDomain'
import _renewDomain from './services/renewDomain'
import _getContactDomains from './services/getContactDomains'
export default {
    whois: _whois.whois,
    registerDomain: _registerDomain.register,
    renewDomain: _renewDomain.renew,
    getContactDomains: _getContactDomains.getDomains
}
