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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EppSocket = void 0;
const net = __importStar(require("net"));
/**
 * @description A socket connecting the epp client and the server
 */
class EppSocket {
    /**
     *
     * @param host server's host's ip address
     * @param port the port on which the server is listenning
     */
    constructor(host, port) {
        /**
         * @description indicates if the client is connected to the server or not
         */
        this.connected = false;
        this.client = new net.Socket();
        this.host = host;
        this.port = port;
        this.responses = [];
    }
    /**
     *
     * @description initiates the connection between the client and the server
     */
    connect() {
        return new Promise((resolve) => {
            this.client = new net.Socket();
            this.client.connect(this.port, this.host, () => {
                this.connected = true;
                resolve("TCP connection established with the server.");
            });
        });
    }
    /**
     *
     * @description destroys the socket
     */
    destroy() {
        return new Promise((resolve) => {
            this.client.end();
            this.client.on("end", () => {
                this.connected = false;
                resolve("TCP connection ended");
            });
        });
    }
    /**
     *
     * @returns this.reponses
     */
    getResponse() {
        return this.responses;
    }
    /**
     *
     * @returns this.host
     */
    getHost() {
        return this.host;
    }
    /**
     *
     * @returns this.port
     */
    getPort() {
        return this.port;
    }
    /**
     *
     * @returns this.connected
     */
    isConnected() {
        return this.connected;
    }
    /**
     *
     * @param message a message to be sent to the server
     * @description writes the message on the socket
     */
    write(message) {
        return new Promise((resolve) => {
            this.client.write(message);
            this.client.on("data", (data) => {
                this.responses.push(data.toString());
                resolve(data.toString());
            });
        });
    }
    /**
     *
     * @param message a message to be sent to the server
     * @description sends the message to the server by connecting the later, writing on the server, and upon reception of the data, destroys the connection
     */
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
