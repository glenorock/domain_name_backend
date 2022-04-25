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
const requestToPay = (reference_id, data) => {
    let options = {
        headers: {
            "Ocp-Apim-Subscription-Key": constants_1.default.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization": `Bearer ${constants_1.default.TOKEN.access_token}`,
            "X-Reference-Id": `${reference_id}`,
            "X-Target-Environment": `${constants_1.default.USER.target_environment}`,
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
            let res = yield axios_1.default.post(constants_1.default.URLS.REQUEST_TO_PAY, body, options);
            resolve(res);
        }
        catch (err) {
            reject(err);
        }
    }));
};
const getRequestToPayStatus = (reference_id) => {
    let options = {
        headers: {
            "Ocp-Apim-Subscription-Key": constants_1.default.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization": `Bearer ${constants_1.default.TOKEN.access_token}`,
            "X-Target-Environment": `${constants_1.default.USER.target_environment}`,
        }
    };
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let res = yield axios_1.default.get(constants_1.default.URLS.GET_REQUEST_TO_PAY_STATUS(reference_id), options);
            resolve(res);
        }
        catch (err) {
            reject(err);
        }
    }));
};
const requestToPayDeliveryNotification = (reference_id, message) => {
    let options = {
        headers: {
            "Ocp-Apim-Subscription-Key": constants_1.default.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization": `Bearer ${constants_1.default.TOKEN.access_token}`,
            "X-Target-Environment": `${constants_1.default.USER.target_environment}`,
            "notificationMessage": `${message}`,
            "Content-Type": "application/json"
        },
    };
    let body = JSON.stringify({
        "notificationMessage": `${message}`
    });
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let res = yield axios_1.default.post(constants_1.default.URLS.REQUEST_TO_PAY_DELIVERY_NOTIFICATION(reference_id), body, options);
            resolve(res);
        }
        catch (err) {
            reject(err);
        }
    }));
};
exports.default = {
    requestToPay,
    getRequestToPayStatus,
    requestToPayDeliveryNotification
};
