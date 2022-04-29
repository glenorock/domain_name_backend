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
exports.Request = exports.Socket = void 0;
const connection_1 = require("./lib/connection");
const _session = __importStar(require("./lib/request/session/index"));
const _contact = __importStar(require("./lib/request/object/contact"));
const _domain = __importStar(require("./lib/request/object/domain"));
const _host = __importStar(require("./lib/request/object/host"));
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
/**
 * @description Contains the epp messages made to maintain an active session with the epp server
 */
var Request;
(function (Request) {
    var Session;
    (function (Session) {
        Session.hello = _session.hello;
        Session.login = _session.login;
        Session.logout = _session.logout;
    })(Session = Request.Session || (Request.Session = {}));
})(Request = exports.Request || (exports.Request = {}));
/**
 * @description Contains the epp messages made concerning the contact object
 */
(function (Request) {
    var Contact;
    (function (Contact) {
        Contact.checkByEmail = _contact.checkByEmail;
        Contact.checkById = _contact.checkById;
        Contact.create = _contact.create;
        Contact.getDomains = _contact.getDomains;
        Contact.getInfoByEmail = _contact.getInfoByEmail;
        Contact.getInfoById = _contact.getInfoById;
        Contact.update = _contact.update;
    })(Contact = Request.Contact || (Request.Contact = {}));
})(Request = exports.Request || (exports.Request = {}));
/**
 * @description Contains the epp messages made concerning the host object
 */
(function (Request) {
    var Host;
    (function (Host) {
        Host.addAddr = _host.addAddr;
        Host.check = _host.check;
        Host.create = _host.create;
        Host.info = _host.info;
        Host.remAddr = _host.remAddr;
    })(Host = Request.Host || (Request.Host = {}));
})(Request = exports.Request || (exports.Request = {}));
/**
 * @description Contains the epp messages made concerning the request object
 */
(function (Request) {
    var Domain;
    (function (Domain) {
        Domain.addProperty = _domain.addProperty;
        Domain.check = _domain.check;
        Domain.create = _domain.create;
        Domain.info = _domain.info;
        Domain.removeProperty = _domain.removeProperty;
        Domain.renew = _domain.renew;
        Domain.transfer = _domain.transfer;
        Domain.update = _domain.update;
    })(Domain = Request.Domain || (Request.Domain = {}));
})(Request = exports.Request || (exports.Request = {}));
