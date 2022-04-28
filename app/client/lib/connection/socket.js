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
exports.EppSocket = void 0;
const net = __importStar(require("net"));
const config_1 = __importDefault(require("config"));
class EppSocket {
    constructor() {
        this.connected = false;
        this.client = new net.Socket();
        this.host = String(config_1.default.get("cocca.host"));
        this.port = Number(config_1.default.get("cocca.port"));
        this.responses = [];
    }
    static getInstance() {
        return new EppSocket();
    }
    connect() {
        return new Promise((resolve) => {
            this.client = new net.Socket();
            this.client.connect(this.port, this.host, () => {
                this.connected = true;
                resolve("TCP connection established with the server.");
            });
        });
    }
    destroy() {
        return new Promise((resolve) => {
            this.client.end();
            this.client.on("end", () => {
                this.connected = false;
                resolve("TCP connection ended");
            });
        });
    }
    getResponse() {
        return this.responses;
    }
    getHost() {
        return this.host;
    }
    getPort() {
        return this.port;
    }
    isConnected() {
        return this.connected;
    }
    write(message) {
        return new Promise((resolve) => {
            this.client.write(message);
            this.client.on("data", (data) => {
                this.responses.push(data.toString());
                resolve(data.toString());
            });
        });
    }
    send(message) {
        return new Promise((resolve) => {
            this.connect().then(() => {
                this.write(message).then((res) => {
                    this.destroy().then(() => {
                        resolve(res);
                    });
                });
            });
        });
    }
}
exports.EppSocket = EppSocket;
