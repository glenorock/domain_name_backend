"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mailer = void 0;
const utils_1 = require("../utils");
class Mailer {
    /**
     *
     * @param event the event which triggered the mail
     * @param recievers the recievers of the mail
     */
    constructor(event, recievers) {
        /**
         * @description sends the mail
         */
        this.sendMail = () => {
            utils_1.Transporter.sendMail(this.mail);
        };
        this.mail = utils_1.Generator.generateMesage(event, recievers);
    }
}
exports.Mailer = Mailer;
