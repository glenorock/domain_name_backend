"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whois = void 0;
const client_1 = require("../../client");
const whois = (...names) => {
    return new Promise((resolve, reject) => {
        const client = client_1.Socket.getInstance();
        client.send(client_1.Request.Domain.check(names)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
};
exports.whois = whois;
