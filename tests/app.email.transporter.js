"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transporter_1 = __importDefault(require("../app/mail/transporter"));
let input = {
    "receivers": [
        "glen19.og@gmail.com",
        "gotang.megasoft@gmail.com"
    ]
};
transporter_1.default.send({ subject: "subject", message: "message", receivers: input.receivers });
