"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("config"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    let responseText = `Hello World!<br>`;
    responseText += `<small>Requested at: ${req.requestTime}</small>`;
    res.send(responseText);
});
// app.post('/whois',api.whois)
app.post('/register', app_1.default.registerDomain);
app.listen(config_1.default.get("server.port"));
