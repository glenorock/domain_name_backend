"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const client_1 = require("../../client");
const exec = (command) => {
    return new Promise((resolve, reject) => {
        const client = client_1.Socket.getInstance();
        client.send(client_1.Request.Session.hello()).then(() => {
            client.send(client_1.Request.Session.login()).then(() => {
                var _a;
                (_a = command.run()) === null || _a === void 0 ? void 0 : _a.then((res) => {
                    client.send(client_1.Request.Session.logout()).then(() => {
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
exports.exec = exec;
