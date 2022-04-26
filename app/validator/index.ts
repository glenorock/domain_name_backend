/**
 * @module Validators
 */
import fs from 'fs-extra'
import config from 'config'
import * as path from 'path'
import ping from 'ping'


/**
 * @description Interface for the input validators
 */
export interface Validator {
    /**
     * 
     * @param input The value you wish to validate
     * @description checks if the input respects a given criterion
     * @returns a boolean indicating if the criterion is satisfied 
     */
    validate(input: string): boolean;
}


let filePath = path.join(config.get("path.root"), config.get("path.blacklist"))
let data = fs.readFileSync(filePath, 'utf8')
const blacklist = String(data).split("\n")

export class DomainValidator implements Validator {
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

export class EmailValidator implements Validator {

    /**
    * @description This function checks if the email addresses follows the general format of email addresses 
    * @param email
    * @returns A boolean describing if the email is acceptable as regards this criterion
    */
    private check = (email: string) => {
        let regex = RegExp(/^[a-zA-z0-9].+@.+\..*$/)
        return regex.test(String(email))
    }

    public validate(input: string): boolean {
        return this.check(input)
    }
}

export class IpValidator implements Validator {
    /**
    * @description This function checks if the ip addresses follows the general format of ip addresses 
    * @returns A boolean describing if the name is acceptable as regards this criterion
    */
    private checkFormat = (ip: string) => {
        let regex = RegExp(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/)
        return regex.test(String(ip))
    }

    /**
     * 
     * @param ip 
     * @returns A Promise<Boolean> which shall tell us if the ip address is accessible or not"
     * @description A ping shall be made to the ip address
     */
    public isAlive = (ip: string) => {
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
    private isPublic = (ip: string) => {
        return true
    }

    public validate(input: string): boolean {
        return (this.checkFormat(input) && this.isPublic(input))
    }
}

export class PhoneNumberValidator implements Validator{
    
    /**
     * @description Checks the lenght of a telephone number. The later is to be equal to 9
     * @param phone 
     * @returns a boolean describing if the condition if met
     */
    private checkLength = (phone:string) =>{
        let tel = String(phone)
        if (tel.length === 9){
            return true
        }else{
            return false
        }
    }
    
    /**
     * @description Checks is the telephone number consists effectively only of numbers
     * @param phone 
     * @returns a boolean describing if the condition if met
     */
    private checkNumber = (phone:string) =>{
        let tel = String(phone)
        let regex = RegExp(/^\d+$/)
        return regex.test(tel)
    }
    
    /**
     * @description Checks is the telephone number belongs to either MTN or Orange
     * @param phone 
     * @returns a boolean describing if the condition if met
     */
    private checkOperator = (phone:string) =>{
        let tel = String(phone)
        let mtnReg =RegExp(/^6(5[0-4]|7\d|80)\d+$/)
        let orangeReg =RegExp(/^6(9|5[5-9])\d+$/)
        if (mtnReg.test(tel) || orangeReg.test(tel)){
            return true
        }else{
            return false
        }
    }
    
    public validate(input: string): boolean {
        return (this.checkLength(input) && this.checkNumber(input) && this.checkOperator(input))
    }
}