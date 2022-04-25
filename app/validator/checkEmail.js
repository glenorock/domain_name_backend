"use strict";
/**
 * @package validator
 * @module Validator.Email
 * @description This module has as goal to validate the format of an email
 * @param email a string representing an email address
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
/**
 * @description This function checks if the email addresses follows the general format of email addresses
 * @param email
 * @returns A boolean describing if the email is acceptable as regards this criterion
 */
const check = (email) => {
    let regex = RegExp(/^[a-zA-z0-9].+@.+\..*$/);
    return regex.test(String(email));
};
exports.check = check;
