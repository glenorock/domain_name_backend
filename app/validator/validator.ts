/**
 * @module Validator
 * @param input The input to be validated
 * @description The aim of this module is to validate the different inputs sent into the system
 */

/**
 * @description Interface for the input validators
 */
export interface Validator{
    validate(input:string):boolean;
}