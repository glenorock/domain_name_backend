"use strict";
/**
 * @module Validator.PhoneNumber
 * @description This module has as goal to validate the format a telephone number
 * @param phone a string representing a phone number
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberValidator = void 0;
class PhoneNumberValidator {
    constructor() {
        /**
         * @description Checks the lenght of a telephone number. The later is to be equal to 9
         * @param phone
         * @returns a boolean describing if the condition if met
         */
        this.checkLength = (phone) => {
            let tel = String(phone);
            if (tel.length === 9) {
                return true;
            }
            else {
                return false;
            }
        };
        /**
         * @description Checks is the telephone number consists effectively only of numbers
         * @param phone
         * @returns a boolean describing if the condition if met
         */
        this.checkNumber = (phone) => {
            let tel = String(phone);
            let regex = RegExp(/^\d+$/);
            return regex.test(tel);
        };
        /**
         * @description Checks is the telephone number belongs to either MTN or Orange
         * @param phone
         * @returns a boolean describing if the condition if met
         */
        this.checkOperator = (phone) => {
            let tel = String(phone);
            let mtnReg = RegExp(/^6(5[0-4]|7\d|80)\d+$/);
            let orangeReg = RegExp(/^6(9|5[5-9])\d+$/);
            if (mtnReg.test(tel) || orangeReg.test(tel)) {
                return true;
            }
            else {
                return false;
            }
        };
    }
    validate(input) {
        return (this.checkLength(input) && this.checkNumber(input) && this.checkOperator(input));
    }
}
exports.PhoneNumberValidator = PhoneNumberValidator;
