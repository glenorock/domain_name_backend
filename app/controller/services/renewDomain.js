"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = __importDefault(require("../../client/session/session"));
const domain_1 = __importDefault(require("../../client/object/domain/domain"));
const renew = (domain, period) => {
    return new Promise((resolve, reject) => {
        session_1.default.hello().then(() => {
            session_1.default.login().then(() => {
                session_1.default.hello().then(() => {
                }).then(() => {
                    domain_1.default.renew(domain, period).then((res) => {
                        resolve(res);
                    }).catch(err => {
                        reject(err);
                    });
                }).catch(err => {
                    reject(err);
                });
            }).catch(err => {
                reject(err);
            });
        }).catch(err => {
            reject(err);
        });
    });
};
exports.default = { renew };
