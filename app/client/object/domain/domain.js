"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transporter_1 = __importDefault(require("../../../utils/transporter"));
const messages_1 = __importDefault(require("./messages"));
exports.default = {
    check: (names) => { return transporter_1.default.send(messages_1.default.check(names)); },
    info: (names) => { return transporter_1.default.send(messages_1.default.info(names)); },
    create: (domain) => { return transporter_1.default.send(messages_1.default.create(domain)); },
    renew: (domain, period) => { return transporter_1.default.send(messages_1.default.renew(domain, period)); },
    update: (domain) => { return transporter_1.default.send(messages_1.default.update(domain)); },
};
