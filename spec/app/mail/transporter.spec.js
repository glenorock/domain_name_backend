"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
describe("Sending email", () => {
    const transporter = require('../../../app/mail/transporter');
    const input = require('./data/email.input.json');
    it("should be able to send an email to an adresse", () => {
        console.log(input);
        input.receivers.forEach((ele) => __awaiter(void 0, void 0, void 0, function* () {
            transporter.send("subject", "message", ele);
        }));
    });
    it("should be able to send bulk messages to an adresse", () => __awaiter(void 0, void 0, void 0, function* () {
        transporter.sendBulk("subject", "message", input.receivers);
    }));
});
