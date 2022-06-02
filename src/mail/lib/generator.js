"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMessage = void 0;
const index_1 = require("../../models/index");
const generateMessage = (event, receivers) => {
    let mail = {
        subject: "",
        message: "",
        receivers: receivers
    };
    switch (event.type) {
        case index_1.EventTypes.AccountCreation:
            break;
        case index_1.EventTypes.DomainCreation:
            break;
        default:
            break;
    }
    return mail;
};
exports.generateMessage = generateMessage;
