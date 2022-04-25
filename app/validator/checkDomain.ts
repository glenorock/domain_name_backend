/**
 * @module Validator.Domain
 * @description This module has as goal to validate the format of the domain name
 * @param domain a string representing the name of the domain
 * 
 */

import fs from 'fs-extra'
import config from 'config'
import * as path from 'path'
import { Validator } from './validator'

let filePath = path.join(config.get("path.root"), config.get("path.blacklist"))
let data = fs.readFileSync(filePath, 'utf8')
const blacklist = String(data).split("\n")

export abstract class DomainValidator implements Validator {
    /**
     * @description This function checks if the domain name follows the string format prescribed  in the ".cm" naming charter 
     * @param domain 
     * @returns A boolean describing if the name is acceptable as regards this criterion
     */
    private checkConstitution = (domain: string) => {
        let reg = RegExp(/^[a-zA-Z][a-zA-Z0-9_][a-zA-Z0-9_]*[a-zA-Z0-9]$/)
        return reg.test(String(domain))
    }

    /**
     * @description This function checks if the domain name has at least 2 characters and at most 63 characters
     * @param domain 
     * @returns A boolean describing if the name is acceptable as regards this criterion
     */
     private checkLength = (domain: string) => {
        let reg = RegExp(/^.{2,63}$/)
        return reg.test(String(domain))
    }


    /**
     * @description This function checks if the domain name does not contain a black listed word
     * @param domain 
     * @returns A boolean describing if the name is acceptable as regards this criterion
     */
     private checkWhiteListed = (domain: string) => {
        for (let i = 0; i < blacklist.length; i++) {
            let ele = String(blacklist[i]).replace("\r", "")
            let res = String(domain).includes(ele)
            if (res) return false
        }
        return true
    }

    /**
     * @description Checks if all the criteria a followed
     * @param input 
     * @returns A boolean describing if the name is acceptable as regards all the above criteria
     */
    public validate = (domain: string): boolean => {
        return (this.checkConstitution(domain) && this.checkLength(domain) && this.checkWhiteListed(domain))
    }
}