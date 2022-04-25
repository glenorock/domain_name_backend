"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = __importDefault(require("./messages"));
const transporter_1 = __importDefault(require("../../../utils/transporter"));
exports.default = {
    checkById: (id) => {
        return transporter_1.default.send(messages_1.default.checkById(id));
    },
    checkByEmail: (email) => {
        return transporter_1.default.send(messages_1.default.checkByEmail(email));
    },
    getInfoByEmail: (email) => {
        return transporter_1.default.send(messages_1.default.getInfoByEmail(email));
    },
    getInfoById: (id) => {
        return transporter_1.default.send(messages_1.default.getInfoById(id));
    },
    create: (contact) => {
        return transporter_1.default.send(messages_1.default.create(contact));
    },
    update: (contact) => {
        return transporter_1.default.send(messages_1.default.update(contact));
    }
};
