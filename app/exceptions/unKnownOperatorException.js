"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownOperatorException = void 0;
const UnknownOperatorException = () => {
    const error = Error("The mobile operator is not recongnised by the system");
    return error;
};
exports.UnknownOperatorException = UnknownOperatorException;
UnknownOperatorException.prototype = Object.create(Error.prototype);
