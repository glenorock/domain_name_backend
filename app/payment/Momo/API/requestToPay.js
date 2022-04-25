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
exports.requestToPayDeliveryNotification = exports.getRequestToPayStatus = exports.requestToPay = void 0;
const constants = __importStar(require("./constants"));
const axios_1 = __importDefault(require("axios"));
const requestToPay = (reference_id, data) => {
    let options = {
        headers: {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization": `Bearer ${constants.TOKEN.access_token}`,
            "X-Reference-Id": `${reference_id}`,
            "X-Target-Environment": `${constants.USER.target_environment}`,
            "Content-Type": "application/json"
        },
    };
    let body = JSON.stringify({
        "amount": `${data.amount}`,
        "currency": `${data.currency}`,
        "externalId": `${data.externalId}`,
        "payer": {
            "partyIdType": "MSISDN",
            "partyId": `${data.payer.partyId}`
        },
        "payerMessage": `${data.payerMessage}`,
        "payeeNote": `${data.payeeNote}`
    });
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let res = yield axios_1.default.post(constants.URLS.REQUEST_TO_PAY, body, options);
            resolve(res);
        }
        catch (err) {
            reject(err);
        }
    }));
};
exports.requestToPay = requestToPay;
const getRequestToPayStatus = (reference_id) => {
    let options = {
        headers: {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization": `Bearer ${constants.TOKEN.access_token}`,
            "X-Target-Environment": `${constants.USER.target_environment}`,
        }
    };
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let res = yield axios_1.default.get(constants.URLS.GET_REQUEST_TO_PAY_STATUS(reference_id), options);
            resolve(res);
        }
        catch (err) {
            reject(err);
        }
    }));
};
exports.getRequestToPayStatus = getRequestToPayStatus;
const requestToPayDeliveryNotification = (reference_id, message) => {
    let options = {
        headers: {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization": `Bearer ${constants.TOKEN.access_token}`,
            "X-Target-Environment": `${constants.USER.target_environment}`,
            "notificationMessage": `${message}`,
            "Content-Type": "application/json"
        },
    };
    let body = JSON.stringify({
        "notificationMessage": `${message}`
    });
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let res = yield axios_1.default.post(constants.URLS.REQUEST_TO_PAY_DELIVERY_NOTIFICATION(reference_id), body, options);
            resolve(res);
        }
        catch (err) {
            reject(err);
        }
    }));
};
exports.requestToPayDeliveryNotification = requestToPayDeliveryNotification;
