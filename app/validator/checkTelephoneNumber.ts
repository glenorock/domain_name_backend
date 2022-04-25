/**
 * @module Validator.PhoneNumber
 * @description This module has as goal to validate the format a telephone number
 * @param phone a string representing a phone number
 * 
 */

import { Validator } from "./validator"

export abstract class PhoneNumberValidator implements Validator{
    
    /**
     * @description Checks the lenght of a telephone number. The later is to be equal to 9
     * @param phone 
     * @returns a boolean describing if the condition if met
     */
    checkLength = (phone:string) =>{
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
    checkNumber = (phone:string) =>{
        let tel = String(phone)
        let regex = RegExp(/^\d+$/)
        return regex.test(tel)
    }
    
    /**
     * @description Checks is the telephone number belongs to either MTN or Orange
     * @param phone 
     * @returns a boolean describing if the condition if met
     */
    checkOperator = (phone:string) =>{
        let tel = String(phone)
        let mtnReg =RegExp(/^6(5[0-4]|7\d|80)\d+$/)
        let orangeReg =RegExp(/^6(9|5[5-9])\d+$/)
        if (mtnReg.test(tel) || orangeReg.test(tel)){
            return true
        }else{
            return false
        }
    }
    
    validate(input: string): boolean {
        return (this.checkLength(input) && this.checkNumber(input) && this.checkOperator(input))
    }
}