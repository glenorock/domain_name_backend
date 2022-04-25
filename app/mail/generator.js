"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("../models/event");
const generator = (_event, _receivers) => {
    let mail = {
        subject: "",
        message: "",
        receivers: _receivers
    };
    switch (_event.type) {
        case event_1.EventTypes.AccountCreation:
            break;
        case event_1.EventTypes.DomainCreation:
            break;
        default:
            break;
    }
    return mail;
};
exports.default = { generator };
