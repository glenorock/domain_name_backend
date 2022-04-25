"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = __importDefault(require("./messages"));
const transporter_1 = __importDefault(require("../../../utils/transporter"));
exports.default = {
    check: (names) => { return transporter_1.default.send(messages_1.default.check(names)); },
    info: (names) => { return transporter_1.default.send(messages_1.default.check(names)); },
    create: (host) => { return transporter_1.default.send(messages_1.default.create(host)); },
    addAddr: (host, addrs) => { return transporter_1.default.send(messages_1.default.addAddr(host, addrs)); },
    remAddr: (host, addrs) => { return transporter_1.default.send(messages_1.default.remAddr(host, addrs)); }
};
