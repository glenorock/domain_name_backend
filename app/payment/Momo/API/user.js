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
const axios_1 = __importDefault(require("axios"));
const constants_1 = __importDefault(require("./constants"));
const createUser = (referenceId) => {
    let options = {
        "headers": {
            "X-Reference-Id": referenceId,
            "Ocp-Apim-Subscription-Key": constants_1.default.OCP_APIM_SUBSCRIPTION_KEY,
            "Content-Type": "application/json"
        },
    };
    let body = {
        "providerCallbackHost": constants_1.default.PROVIDER_CALL_BACK_HOST
    };
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let res = yield axios_1.default.post(constants_1.default.URLS.CREATE_USER, body, options);
            resolve(res);
        }
        catch (err) {
            reject(err);
        }
    }));
};
const getUserInfo = (referenceId) => {
    let options = {
        "headers": {
            "Ocp-Apim-Subscription-Key": constants_1.default.OCP_APIM_SUBSCRIPTION_KEY,
        },
    };
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let res = yield axios_1.default.get(constants_1.default.URLS.GET_USER(referenceId), options);
            if (res.status === 200) {
                resolve(res.data);
            }
            else {
                reject(res);
            }
        }
        catch (error) {
            reject(error);
        }
    }));
};
const createAPIKey = (referenceId) => {
    let options = {
        "headers": {
            "Ocp-Apim-Subscription-Key": constants_1.default.OCP_APIM_SUBSCRIPTION_KEY,
        },
    };
    let body = "";
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let res = yield axios_1.default.post(constants_1.default.URLS.CREATE_API_KEY(referenceId), body, options);
            if (res.status === 201) {
                resolve(res.data.apiKey);
            }
            else {
                reject(res);
            }
        }
        catch (err) {
            reject(err);
        }
    }));
};
exports.default = {
    createUser,
    getUserInfo,
    createAPIKey
};
