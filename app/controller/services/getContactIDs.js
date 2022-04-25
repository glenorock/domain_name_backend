"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = __importDefault(require("../../client/session/session"));
const contact_1 = __importDefault(require("../../client/object/contact/contact"));
const getContacts = (contacts) => {
    return new Promise((resolve, reject) => {
        let promisses = [];
        session_1.default.hello().then(() => {
            console.log("Connected to epp server: ");
            session_1.default.login().then(() => {
                contacts.forEach((contact) => {
                    promisses.push(contact_1.default.getInfoByEmail(contact.email));
                });
                Promise.all(promisses).then((res) => {
                    session_1.default.logout().then(() => {
                        resolve(res);
                    }).catch((err) => {
                        reject(err);
                    });
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
exports.default = {
    getContacts
};
