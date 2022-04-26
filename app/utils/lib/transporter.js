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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.connect = exports.send = void 0;
const config_1 = __importDefault(require("config"));
const Net = __importStar(require("net"));
const host = String(config_1.default.get("cocca.host"));
const port = Number(config_1.default.get("cocca.port"));
// const send = (message: string) => {
//     const client = new Net.Socket()
//     return new Promise((resolve) => {
//         client.connect(port, host, () => {
//             console.log('TCP connection established with the server.');
//             client.write(message)
//             client.on('data', function (chunk: any) {
//                 let result = chunk.toString()
//                 client.end()
//                 resolve(result)
//             });
//         })
//     })
// }
const client = new Net.Socket();
const connect = () => {
    return new Promise((resolve, reject) => {
        client.connect(port, host, () => {
            console.log('TCP connection established with the server.');
            resolve('TCP connection established with the server.');
            client.on('close', (data) => {
                console.log(data);
            });
        });
    });
};
exports.connect = connect;
const close = () => {
    return new Promise((resolve, reject) => {
        client.end();
        console.log("connection ended");
        resolve("connection ended");
    });
};
exports.close = close;
const send = (message) => {
    return new Promise((resolve) => {
        client.write(message);
        client.on('data', function (chunk) {
            let result = chunk.toString();
            resolve(result);
        });
    });
};
exports.send = send;