"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = __importDefault(require("../app/client/session/session"));
session_1.default.hello().then((res) => {
    console.log(res);
});
session_1.default.login().then((res) => {
    console.log(res);
});
session_1.default.logout().then((res) => {
    console.log(res);
});
