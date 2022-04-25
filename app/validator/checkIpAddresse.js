"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ping_1 = __importDefault(require("ping"));
const checkFormat = (ip) => {
    let regex = RegExp(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/);
    return regex.test(String(ip));
};
const isAlive = function (ip) {
    ping_1.default.promise.probe(ip).then((res) => {
        console.log(res);
        return res.alive;
    }).catch((err) => {
        console.log(err);
        return err;
    });
};
exports.default = {
    checkFormat,
    isAlive
};
