/**
 * @module Validator.Ip
 * @description This module has as goal to validate the format of an ip address, if the later is a public address and if it is accessible over the internet
 * @param ip a string representing an ip address
 * 
 */

import ping from 'ping'
import { Validator } from './validator'

export abstract class IpValidator implements Validator {
    /**
    * @description This function checks if the ip addresses follows the general format of ip addresses 
    * @returns A boolean describing if the name is acceptable as regards this criterion
    */
    checkFormat = (ip: string) => {
        let regex = RegExp(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/)
        return regex.test(String(ip))
    }

    /**
     * 
     * @param ip 
     * @returns A Promise<Boolean> which shall tell us if the ip address is accessible or not"
     * @description A ping shall be made to the ip address
     */
    isAlive = (ip: string) => {
        return new Promise((resolve, reject) => {
            ping.promise.probe(ip).then((res: any) => {
                if (res.alive) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            }).catch((err: any) => {
                console.log(err)
                reject(false)
            })
        })
    }

    /**
     * @description This function checks if the domain name follows the general format of email addresses 
     * @returns A boolean describing if the name is acceptable as regards this criterion
     */
    isPublic = (ip: string) => {
        return true
    }

    public validate(input: string): boolean {
        return (this.checkFormat(input) && this.isPublic(input))
    }
}