"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = exports.getInstance = void 0;
const mailer_1 = require("./lib/mailer");
const getInstance = (event, recievers) => {
    return new mailer_1.Mailer(event, recievers);
};
exports.getInstance = getInstance;
const sendMail = (event, recievers) => {
    (new mailer_1.Mailer(event, recievers)).sendMail();
};
exports.sendMail = sendMail;
