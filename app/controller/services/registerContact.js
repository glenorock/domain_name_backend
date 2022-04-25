"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContacts = void 0;
const mailer = __importStar(require("../../mail/mailer"));
const eppSession = __importStar(require("../../client/session/session"));
const eppContact = __importStar(require("../../client/object/contact/contact"));
const event_1 = require("../../models/event");
const createContactIfNotExists = (contact) => {
    return new Promise((resolve, reject) => {
        eppSession.hello().then(() => {
            console.log("Connected to epp server: ");
            eppSession.login().then(() => {
                eppContact.checkByEmail(contact.email).then((res) => {
                    if (res.exists) {
                        eppContact.create(contact).then((res) => {
                            eppSession.logout().then(() => {
                                mailer.sendMail({ type: event_1.EventTypes.ContactCreation, data: "" }, [contact.email]);
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
exports.createContacts = createContacts;
