"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const whois_1 = __importDefault(require("./services/whois"));
exports.default = {
    whois: whois_1.default.whois
};
