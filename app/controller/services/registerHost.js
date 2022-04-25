"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = __importDefault(require("../../client/session/session"));
const host_1 = __importDefault(require("../../client/object/host/host"));
const registerOne = (host) => {
    return new Promise((resolve, reject) => {
        session_1.default.hello().then(() => {
            session_1.default.login().then(() => {
                host_1.default.create(host).then((res) => {
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            }).catch((err) => {
                reject(err);
            }).finally(() => {
                session_1.default.logout();
            });
        }).catch((err) => {
            reject(err);
        });
    });
};
const register = (hosts) => {
    return new Promise((resolve, reject) => {
        let promises = [];
        hosts.forEach((host) => {
            promises.push(registerOne(host));
        });
        Promise.all(promises).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
};
exports.default = {
    register
};
