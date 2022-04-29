"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../app/client/lib/connection");
const config_1 = __importDefault(require("config"));
let host = String(config_1.default.get("cocca.host"));
let port = Number(config_1.default.get("cocca.port"));
const client = new connection_1.EppSocket(host, port);
let out = [];
client.send("test1").then((res) => {
    out.push(res);
}).then(() => {
    client.send("test2").then((res) => {
        out.push(res);
    }).then(() => {
        client.send("test3").then((res) => {
            out.push(res);
        }).then(() => {
            client.send("test4").then((res) => {
                out.push(res);
            }).then(() => {
                client.send("test5").then((res) => {
                    out.push(res);
                    console.log(out);
                    console.log(client);
                });
            });
        });
    });
});
