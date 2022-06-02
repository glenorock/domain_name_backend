"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDomains = exports.update = exports.register = exports.getInfoById = exports.getInfoByEmail = exports.checkByEmail = exports.checkById = void 0;
const client_1 = require("../../client");
function checkById(id) {
    return new Promise((resolve, reject) => {
        let client = client_1.Socket.getInstance();
        client.send(client_1.Request.Contact.checkById(id)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.checkById = checkById;
function checkByEmail(email) {
    return new Promise((resolve, reject) => {
        let client = client_1.Socket.getInstance();
        client.send(client_1.Request.Contact.checkByEmail(email)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.checkByEmail = checkByEmail;
function getInfoByEmail(email) {
    return new Promise((resolve, reject) => {
        let client = client_1.Socket.getInstance();
        client.send(client_1.Request.Contact.getInfoByEmail(email)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.getInfoByEmail = getInfoByEmail;
function getInfoById(id) {
    return new Promise((resolve, reject) => {
        let client = client_1.Socket.getInstance();
        client.send(client_1.Request.Contact.getInfoById(id)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.getInfoById = getInfoById;
function register(contact) {
    return new Promise((resolve, reject) => {
        let client = client_1.Socket.getInstance();
        client.send(client_1.Request.Contact.create(contact)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.register = register;
function update(contact) {
    return new Promise((resolve, reject) => {
        let client = client_1.Socket.getInstance();
        client.send(client_1.Request.Contact.update(contact)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.update = update;
function getDomains(id) {
    return new Promise((resolve, reject) => {
        let client = client_1.Socket.getInstance();
        client.send(client_1.Request.Contact.getDomains(id)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.getDomains = getDomains;
