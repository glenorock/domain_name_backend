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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const config = require('config');
const file = require('../config/default.json');
let fileName = path.join(config.get("path.root"), config.get("path.conf"));
const update = (property, value) => {
    let props = String(property).split(".");
    let f = file;
    switch (props.length) {
        case 0:
            break;
        case 1:
            f[props[0]] = value;
            break;
        case 2:
            f[props[0]][props[1]] = value;
            break;
        case 3:
            f[props[0]][props[1]][props[2]] = value;
            break;
        case 4:
            f[props[0]][props[1]][props[2]][props[3]] = value;
            break;
        case 5:
            f[props[0]][props[1]][props[2]][props[3]][props[4]] = value;
            break;
        default:
            break;
    }
    fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
        if (err)
            return console.log(err);
    });
};
exports.default = { update };
