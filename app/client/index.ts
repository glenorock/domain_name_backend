/**
 * @module EPP Client
 */

import { EppSocket } from "./lib/connection";
import config from 'config'

export namespace Socket {
    /**
     * @description Initiates an epp socket
     * @returns an instance of an epp socket 
     */
    export function getInstance():EppSocket{
        let host = String(config.get("cocca.host"))
        let port = Number(config.get("cocca.port"))
        return new EppSocket(host,port)
    }
}

