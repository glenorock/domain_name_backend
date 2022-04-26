"use strict";
/**
 * @module Validator.Email
 * @description This module has as goal to validate the format of an email
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidator = void 0;
class EmailValidator {
    constructor() {
        /**
        * @description This function checks if the email addresses follows the general format of email addresses
        * @param email
        * @returns A boolean describing if the email is acceptable as regards this criterion
        */
        this.check = (email) => {
            let regex = RegExp(/^[a-zA-z0-9].+@.+\..*$/);
            return regex.test(String(email));
        };
    }
    validate(input) {
        return this.check(input);
    }
}
exports.EmailValidator = EmailValidator;
