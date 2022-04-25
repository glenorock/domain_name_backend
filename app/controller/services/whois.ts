import * as eppSession from '../../client/session/session'
import * as eppDomain from '../../client/object/domain/domain'

const whois = (names:string[]) => {
    return new Promise((resolve, reject) => {
        resolve(names)
    })
}

export {whois}