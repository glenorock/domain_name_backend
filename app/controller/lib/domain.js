"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renew = exports.register = exports.info = exports.check = void 0;
const client_1 = require("../../client");
function check(names) {
    return new Promise((resolve, reject) => {
        const client = client_1.Socket.getInstance();
        client.send(client_1.Request.Domain.check(names)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.check = check;
function info(names) {
    return new Promise((resolve, reject) => {
        const client = client_1.Socket.getInstance();
        client.send(client_1.Request.Domain.info(names)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.info = info;
function register(domain) {
    return new Promise((resolve, reject) => {
        const client = client_1.Socket.getInstance();
        client.send(client_1.Request.Domain.create(domain)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.register = register;
function renew(domain, period) {
    return new Promise((resolve, reject) => {
        const client = client_1.Socket.getInstance();
        client.send(client_1.Request.Domain.renew(domain, period)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.renew = renew;
