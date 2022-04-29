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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const config_1 = __importDefault(require("config"));
const nodemailer = __importStar(require("nodemailer"));
var mailTransporter = nodemailer.createTransport(config_1.default.get("email"));
const sendMail = (mail) => {
    return new Promise((resolve, reject) => {
        var mailOptions = {
            from: config_1.default.get("email.auth.user"),
            to: mail.receivers.join(","),
            subject: mail.subject,
            html: mail.message
        };
        mailTransporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                resolve(undefined);
            }
            else {
                console.log('Email sent: ' + info.response);
                reject(info.response);
            }
        });
    });
};
exports.sendMail = sendMail;
