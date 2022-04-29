"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberValidator = exports.IpValidator = exports.EmailValidator = exports.DomainValidator = void 0;
/**
 * @module Validators
 */
const fs_extra_1 = __importDefault(require("fs-extra"));
const config_1 = __importDefault(require("config"));
const path = __importStar(require("path"));
const ping_1 = __importDefault(require("ping"));
let filePath = path.join(config_1.default.get("path.root"), config_1.default.get("path.blacklist"));
let data = fs_extra_1.default.readFileSync(filePath, 'utf8');
const blacklist = String(data).split("\n");
class DomainValidator {
    constructor() {
        /**
         * @description This function checks if the domain name follows the string format prescribed  in the ".cm" naming charter
         * @param domain
         * @returns A boolean describing if the name is acceptable as regards this criterion
         */
        this.checkConstitution = (domain) => {
            let reg = RegExp(/^[a-zA-Z][a-zA-Z0-9_][a-zA-Z0-9_]*[a-zA-Z0-9]$/);
            return reg.test(String(domain));
        };
        /**
         * @description This function checks if the domain name has at least 2 characters and at most 63 characters
         * @param domain
         * @returns A boolean describing if the name is acceptable as regards this criterion
         */
        this.checkLength = (domain) => {
            let reg = RegExp(/^.{2,63}$/);
            return reg.test(String(domain));
        };
        /**
         * @description This function checks if the domain name does not contain a black listed word
         * @param domain
         * @returns A boolean describing if the name is acceptable as regards this criterion
         */
        this.checkWhiteListed = (domain) => {
            for (let i = 0; i < blacklist.length; i++) {
                let ele = String(blacklist[i]).replace("\r", "");
                let res = String(domain).includes(ele);
                if (res)
                    return false;
            }
            return true;
        };
        /**
         * @description Checks if all the criteria a followed
         * @param input
         * @returns A boolean describing if the name is acceptable as regards all the above criteria
         */
        this.validate = (domain) => {
            return (this.checkConstitution(domain) && this.checkLength(domain) && this.checkWhiteListed(domain));
        };
    }
}
exports.DomainValidator = DomainValidator;
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
class IpValidator {
    constructor() {
        /**
        * @description This function checks if the ip addresses follows the general format of ip addresses
        * @returns A boolean describing if the name is acceptable as regards this criterion
        */
        this.checkFormat = (ip) => {
            let regex = RegExp(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/);
            return regex.test(String(ip));
        };
        /**
         *
         * @param ip
         * @returns A Promise<Boolean> which shall tell us if the ip address is accessible or not"
         * @description A ping shall be made to the ip address
         */
        this.isAlive = (ip) => {
            return new Promise((resolve, reject) => {
                ping_1.default.promise.probe(ip).then((res) => {
                    if (res.alive) {
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                }).catch((err) => {
                    console.log(err);
                    reject(false);
                });
            });
        };
        /**
         * @description This function checks if the domain name follows the general format of email addresses
         * @returns A boolean describing if the name is acceptable as regards this criterion
         */
        this.isPublic = (ip) => {
            return true;
        };
    }
    validate(input) {
        return (this.checkFormat(input) && this.isPublic(input));
    }
}
exports.IpValidator = IpValidator;
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
