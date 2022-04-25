"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = __importDefault(require("./generator"));
const transporter_1 = __importDefault(require("./transporter"));
const sendMail = (_event, _receivers) => {
    return transporter_1.default.send(generator_1.default.generator(_event, _receivers));
};
exports.default = { sendMail };
