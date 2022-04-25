import _whois from "./services/whois"
import _registerDomain from './services/registerDomain'

export default {
    whois: _whois.whois,
    registerDomain: _registerDomain.register
}
