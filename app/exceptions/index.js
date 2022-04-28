"use strict";
/**
 *
 * @module Exception
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputFormatException = exports.UnknownOperatorException = void 0;
/**
 *
 * @returns an exception indicating the operator inteserted is unknown
 */
const UnknownOperatorException = () => {
    const error = Error("The mobile operator is not recongnised by the system");
    return error;
};
exports.UnknownOperatorException = UnknownOperatorException;
const InputFormatException = (reason) => {
    const error = Error(`Input is not valid: ${reason}`);
    return error;
};
exports.InputFormatException = InputFormatException;
