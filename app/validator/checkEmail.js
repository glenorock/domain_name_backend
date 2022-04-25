"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
const check = (email) => {
    let regex = RegExp(/^[a-zA-z0-9].+@.+\..*$/);
    return regex.test(String(email));
};
exports.check = check;
