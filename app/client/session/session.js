"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = __importDefault(require("./messages"));
const transporter_1 = __importDefault(require("../../utils/transporter"));
exports.default = {
    login: () => {
        return transporter_1.default.send(messages_1.default.login());
    },
    logout: () => {
        return transporter_1.default.send(messages_1.default.logout());
    },
    hello: () => {
        return transporter_1.default.send(messages_1.default.hello());
    }
};
