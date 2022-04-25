"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOperator = exports.checkNumber = exports.checkLength = void 0;
const checkLength = (phone) => {
    let tel = String(phone);
    if (tel.length === 9) {
        return true;
    }
    else {
        return false;
    }
};
exports.checkLength = checkLength;
const checkNumber = (phone) => {
    let tel = String(phone);
    let regex = RegExp(/^\d+$/);
    return regex.test(tel);
};
exports.checkNumber = checkNumber;
const checkOperator = (phone) => {
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
exports.checkOperator = checkOperator;
