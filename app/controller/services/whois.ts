import * as eppSession from '../../client/lib/Request/lib/session/session'
import * as eppDomain from '../../client/lib/Request/lib/object/domain/domain'
import * as Utils from '../../utils/index'

const whois = (names:string[]) => {
    return new Promise((resolve, reject) => {
        resolve(names)
    })
}

export {whois}