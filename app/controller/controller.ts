import _whois from "./services/whois"
import _registerDomain from './services/registerDomain'
import _renewDomain from './services/renewDomain'

export default {
    whois: _whois.whois,
    registerDomain: _registerDomain.register,
    renewDomain: _renewDomain.renew,
}
