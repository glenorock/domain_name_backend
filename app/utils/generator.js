"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = exports.generateContactIdentifier = void 0;
const generator = __importStar(require("generate-password"));
const generatePassword = () => {
    let password = generator.generate({
        length: 10,
        numbers: true,
        excludeSimilarCharacters: true,
        strict: true
    });
    return password;
};
exports.generatePassword = generatePassword;
const getDate = () => {
    const d = new Date();
    let month = String(d.getMonth() + 1);
    if (month.length === 1) {
        let tmp = "0".concat(month);
        month = tmp;
    }
    let year = String(d.getFullYear());
    return month.concat(year.charAt(2)).concat(year.charAt(3));
};
const generateNumber = (length) => {
    return "x".repeat(length).replace(/x/g, x => String(Math.random() * 10 | 0));
};
const generateContactIdentifier = (name) => {
    let id = String(name).replace(/ +/g, "").slice(0, 6);
    return id.concat(getDate()).concat('-').concat(generateNumber(5));
};
exports.generateContactIdentifier = generateContactIdentifier;
