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
exports.remAddr = exports.addAddr = exports.create = exports.info = exports.check = void 0;
const Messages = __importStar(require("./messages"));
const transporter = __importStar(require("../../../utils/transporter"));
let check = (names) => { return transporter.send(Messages.check(names)); };
exports.check = check;
let info = (names) => { return transporter.send(Messages.check(names)); };
exports.info = info;
let create = (host) => { return transporter.send(Messages.create(host)); };
exports.create = create;
let addAddr = (host, addrs) => { return transporter.send(Messages.addAddr(host, addrs)); };
exports.addAddr = addAddr;
let remAddr = (host, addrs) => { return transporter.send(Messages.remAddr(host, addrs)); };
exports.remAddr = remAddr;
