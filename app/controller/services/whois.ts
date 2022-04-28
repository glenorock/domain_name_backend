import * as eppSession from '../../client/Request/lib/session/session'
import * as eppDomain from '../../client/Request/lib/object/domain/domain'
import * as Utils from '../../utils/index'

const whois = (names:string[]) => {
    return new Promise((resolve, reject) => {
        resolve(names)
    })
}

export {whois}