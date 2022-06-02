"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAddress = exports.addAddress = exports.register = exports.info = exports.check = void 0;
const client_1 = require("../../client");
function check(names) {
    return new Promise((resolve, reject) => {
        let client = client_1.Socket.getInstance();
        client.send(client_1.Request.Host.check(names)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.check = check;
function info(names) {
    return new Promise((resolve, reject) => {
        let client = client_1.Socket.getInstance();
        client.send(client_1.Request.Host.info(names)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.info = info;
function register(host) {
    return new Promise((resolve, reject) => {
        let client = client_1.Socket.getInstance();
        client.send(client_1.Request.Host.create(host)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.register = register;
function addAddress(host, addr) {
    return new Promise((resolve, reject) => {
        let client = client_1.Socket.getInstance();
        client.send(client_1.Request.Host.addAddr(host, addr)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.addAddress = addAddress;
function removeAddress(host, addr) {
    return new Promise((resolve, reject) => {
        let client = client_1.Socket.getInstance();
        client.send(client_1.Request.Host.remAddr(host, addr)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.removeAddress = removeAddress;
