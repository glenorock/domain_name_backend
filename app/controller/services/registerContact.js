"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mailer_1 = __importDefault(require("../../mail/mailer"));
const session_1 = __importDefault(require("../../client/session/session"));
const contact_1 = __importDefault(require("../../client/object/contact/contact"));
const event_1 = require("../../models/event");
const createContactIfNotExists = (contact) => {
    return new Promise((resolve, reject) => {
        session_1.default.hello().then(() => {
            console.log("Connected to epp server: ");
            session_1.default.login().then(() => {
                contact_1.default.checkByEmail(contact.email).then((res) => {
                    if (res.exists) {
                        contact_1.default.create(contact).then((res) => {
                            session_1.default.logout().then(() => {
                                mailer_1.default.sendMail({ type: event_1.EventTypes.ContactCreation, data: "" }, [contact.email]);
                                resolve(res);
                            }).catch((err) => {
                                reject(err);
                            });
                        }).catch((err) => {
                            reject(err);
                        });
                    }
                    else {
                        resolve(res);
                    }
                }).catch((err) => {
                    reject(err);
                });
            }).catch((err) => {
                reject(err);
            });
        }).catch((err) => {
            reject(err);
        });
    });
};
const createContacts = (contacts) => {
    return new Promise((resolve, reject) => {
        let promisses = [];
        contacts.forEach((contact) => {
            promisses.push(createContactIfNotExists(contact));
        });
        Promise.all(promisses).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
};
exports.default = {
    createContacts
};
