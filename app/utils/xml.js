"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJson = void 0;
const xml_js_1 = __importDefault(require("xml-js"));
const toJson = (xml) => {
    return xml_js_1.default.xml2json(xml, { compact: true, spaces: 4 });
};
exports.toJson = toJson;
