/**
 * @package validator
 * @module Validator.Email
 * @description This module has as goal to validate the format of an email
 * @param email a string representing an email address
 * 
 */


/**
 * @description This function checks if the email addresses follows the general format of email addresses 
 * @param email
 * @returns A boolean describing if the email is acceptable as regards this criterion
 */
const check = (email:string) =>{
    let regex = RegExp(/^[a-zA-z0-9].+@.+\..*$/)
    return regex.test(String(email))
}

export {check}