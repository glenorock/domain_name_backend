"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const client_1 = require("../../client");
const utils_1 = require("../../utils");
class Command {
    constructor(exec, ...params) {
        /**
         *
         * @description executes the command
         */
        this.execute = () => {
            switch (this.params.length) {
                case 0:
                    return this.exec.call(this);
                case 1:
                    return this.exec.call(this, this.params[0]);
                case 2:
                    return this.exec.call(this, this.params[0], this.params[1]);
                case 3:
                    return this.exec.call(this, this.params[0], this.params[1], this.params[2]);
                case 4:
                    return this.exec.call(this, this.params[0], this.params[1], this.params[2], this.params[3]);
            }
        };
        this.exec = exec;
        this.params = params;
    }
}
exports.Command = Command;
/**
 *
 * @description Executes a command passed as parameter
 * @param command the command to be executed
 */
Command.run = (command) => {
    return new Promise((resolve, reject) => {
        const client = client_1.Socket.getInstance();
        client.send(client_1.Request.Session.hello()).then(() => {
            client.send(client_1.Request.Session.login()).then(() => {
                var _a;
                (_a = command.execute()) === null || _a === void 0 ? void 0 : _a.then((res) => {
                    client.send(client_1.Request.Session.logout()).then(() => {
                        let string_json = utils_1.XML.toJson(String(res));
                        let json = JSON.parse(string_json);
                        resolve(json.epp);
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
