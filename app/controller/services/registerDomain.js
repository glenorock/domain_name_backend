"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const payer_1 = __importDefault(require("../../payment/payer"));
const register = (data, number) => {
    return new Promise((resolve, reject) => {
        payer_1.default.pay(number, 7000).then(() => {
        }).catch((err) => {
            reject(err);
        });
    });
};
exports.default = {
    register
};
