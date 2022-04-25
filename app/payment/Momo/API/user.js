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
exports.createAPIKey = exports.getUserInfo = exports.createUser = void 0;
const axios_1 = __importDefault(require("axios"));
const constants = __importStar(require("./constants"));
const createUser = (referenceId) => {
    let options = {
        "headers": {
            "X-Reference-Id": referenceId,
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
            "Content-Type": "application/json"
        },
    };
    let body = {
        "providerCallbackHost": constants.PROVIDER_CALL_BACK_HOST
    };
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let res = yield axios_1.default.post(constants.URLS.CREATE_USER, body, options);
            resolve(res);
        }
        catch (err) {
            reject(err);
        }
    }));
};
exports.createUser = createUser;
const getUserInfo = (referenceId) => {
    let options = {
        "headers": {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
        },
    };
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let res = yield axios_1.default.get(constants.URLS.GET_USER(referenceId), options);
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
exports.getUserInfo = getUserInfo;
const createAPIKey = (referenceId) => {
    let options = {
        "headers": {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
        },
    };
    let body = "";
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let res = yield axios_1.default.post(constants.URLS.CREATE_API_KEY(referenceId), body, options);
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
exports.createAPIKey = createAPIKey;
