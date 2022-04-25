"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkIpAddresse_1 = __importDefault(require("../app/validator/checkIpAddresse"));
let ping = checkIpAddresse_1.default.isAlive;
let truthy = ["142.250.75.238", "176.32.103.205", "151.101.129.67"];
truthy.forEach((ele) => {
    ping(ele);
});
let falsy = ["154.72.150.48", "169.254.52.230", " 192.168.168.225"];
falsy.forEach((ele) => {
    ping(ele);
});
