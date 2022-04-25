"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = __importDefault(require("../app/client/session/session"));
const transporter_1 = __importDefault(require("../app/utils/transporter"));
transporter_1.default.connect().then(() => {
    session_1.default.hello().then((res) => {
        console.log("res");
        session_1.default.login().then((res) => {
            console.log("res");
            session_1.default.logout().then((res) => {
                console.log("res");
            });
        });
    }).then(() => {
        transporter_1.default.close();
    });
});
