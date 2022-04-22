import eppSession from '../../client/session/session'
import eppDomain from '../../client/object/domain/domain'

const whois = (names:string[]) => {
    return new Promise((resolve, reject) => {
        resolve(names)
    })
}

export default {whois}