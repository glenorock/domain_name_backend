"use strict";
/**
 * @module EPP Client
 */
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
exports.Resquest = exports.Socket = void 0;
const connection_1 = require("./lib/connection");
const _session = __importStar(require("./lib/request/session/index"));
const config_1 = __importDefault(require("config"));
var Socket;
(function (Socket) {
    /**
     * @description Initiates an epp socket
     * @returns an instance of an epp socket
     */
    function getInstance() {
        let host = String(config_1.default.get("cocca.host"));
        let port = Number(config_1.default.get("cocca.port"));
        return new connection_1.EppSocket(host, port);
    }
    Socket.getInstance = getInstance;
})(Socket = exports.Socket || (exports.Socket = {}));
var Resquest;
(function (Resquest) {
    var Session;
    (function (Session) {
        Session.hello = _session.hello;
        Session.login = _session.login;
        Session.logout = _session.logout;
    })(Session = Resquest.Session || (Resquest.Session = {}));
})(Resquest = exports.Resquest || (exports.Resquest = {}));
