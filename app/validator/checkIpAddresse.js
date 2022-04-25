"use strict";
/**
 * @module Validator.Ip
 * @description This module has as goal to validate the format of an ip address, if the later is a public address and if it is accessible over the internet
 * @param ip a string representing an ip address
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpValidator = void 0;
const ping_1 = __importDefault(require("ping"));
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
