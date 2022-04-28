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
exports.getDomains = exports.update = exports.create = exports.getInfoById = exports.getInfoByEmail = exports.checkByEmail = exports.checkById = void 0;
const Messages = __importStar(require("./messages"));
const Utils = __importStar(require("../../../../../utils/index"));
const transporter = Utils.Transporter;
let checkById = (id) => {
    return transporter.send(Messages.checkById(id));
};
exports.checkById = checkById;
let checkByEmail = (email) => {
    return transporter.send(Messages.checkByEmail(email));
};
exports.checkByEmail = checkByEmail;
let getInfoByEmail = (email) => {
    return transporter.send(Messages.getInfoByEmail(email));
};
exports.getInfoByEmail = getInfoByEmail;
let getInfoById = (id) => {
    return transporter.send(Messages.getInfoById(id));
};
exports.getInfoById = getInfoById;
let create = (contact) => {
    return transporter.send(Messages.create(contact));
};
exports.create = create;
let update = (contact) => {
    return transporter.send(Messages.update(contact));
};
exports.update = update;
let getDomains = (contactId) => {
    return transporter.send(Messages.getDomains(contactId));
};
exports.getDomains = getDomains;
