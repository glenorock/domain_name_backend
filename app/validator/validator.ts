/**
 * @module Validator
 * @param input The input to be validated
 * @description The aim of this module is to validate the different inputs sent into the system
 */

/**
 * @description Interface for the input validators
 */
export interface Validator{
    /**
     * 
     * @param input The value you wish to validate
     * @description checks if the input respects a given criterion
     * @returns a boolean indicating if the criterion is satisfied 
     */
    validate(input:string):boolean;
}