"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("./constants"));
const axios_1 = __importDefault(require("axios"));
const authorisationToken = () => {
    var username = constants_1.default.USER.reference_id;
    var password = constants_1.default.USER.api_key;
    const token = `${username}:${password}`;
    const encodedToken = Buffer.from(token, 'utf8').toString('base64');
    let options = {
        headers: {
            "Ocp-Apim-Subscription-Key": constants_1.default.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization": `Basic ${encodedToken}`
        },
    };
    let body = "";
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let res = yield axios_1.default.post(constants_1.default.URLS.CREATE_AUTH_TOKEN, body, options);
        }
        catch (err) {
            reject(err);
        }
    }));
};
exports.default = { authorisationToken };
