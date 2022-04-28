/**
 * @module EPP Client
 */

import { EppSocket } from "./lib/connection";
import * as _session from './lib/request/session/index'
import * as _contact from './lib/request/object/contact'
import * as _domain from './lib/request/object/domain'
import * as _host from './lib/request/object/host'

import config from 'config'

export namespace Socket {
    /**
     * @description Initiates an epp socket
     * @returns an instance of an epp socket 
     */
    export function getInstance(): EppSocket {
        let host = String(config.get("cocca.host"))
        let port = Number(config.get("cocca.port"))
        return new EppSocket(host, port)
    }
}

/**
 * @description Contains the epp messages made to maintain an active session with the epp server
 */
export namespace Request.Session {
    export const hello = _session.hello
    export const login = _session.login
    export const logout = _session.logout
}

/**
 * @description Contains the epp messages made concerning the contact object
 */
export namespace Request.Contact {
    export const checkByEmail = _contact.checkByEmail
    export const checkById = _contact.checkById
    export const create = _contact.create
    export const getDomains = _contact.getDomains
    export const getInfoByEmail = _contact.getInfoByEmail
    export const getInfoById = _contact.getInfoById
    export const update = _contact.update
}

/**
 * @description Contains the epp messages made concerning the host object
 */
export namespace Request.Host {
    export const addAddr = _host.addAddr
    export const check = _host.check
    export const create = _host.create
    export const info = _host.info
    export const remAddr = _host.remAddr
}

/**
 * @description Contains the epp messages made concerning the request object
 */
export namespace Request.Domain {
    export const addProperty = _domain.addProperty
    export const check = _domain.check
    export const create = _domain.create
    export const info = _domain.info
    export const removeProperty = _domain.removeProperty
    export const renew = _domain.renew
    export const transfer = _domain.transfer
    export const update = _domain.update
}