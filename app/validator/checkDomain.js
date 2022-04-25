"use strict";
/**
 * @module Validator.Domain
 * @description This module has as goal to validate the format of the domain name
 * @param domain a string representing the name of the domain
 *
 */
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
exports.DomainValidator = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const config_1 = __importDefault(require("config"));
const path = __importStar(require("path"));
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
