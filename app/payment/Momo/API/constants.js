"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN = exports.USER = exports.URLS = exports.TARGET_ENVIRONMENT = exports.API_KEY = exports.PROVIDER_CALL_BACK_HOST = exports.OCP_APIM_SUBSCRIPTION_KEY = exports.HOST = void 0;
const host = "https://sandbox.momodeveloper.mtn.com";
let HOST = host;
exports.HOST = HOST;
let OCP_APIM_SUBSCRIPTION_KEY = "cf4b92034b7141a5b0eb554f13584296";
exports.OCP_APIM_SUBSCRIPTION_KEY = OCP_APIM_SUBSCRIPTION_KEY;
let PROVIDER_CALL_BACK_HOST = "localhost";
exports.PROVIDER_CALL_BACK_HOST = PROVIDER_CALL_BACK_HOST;
let API_KEY = "";
exports.API_KEY = API_KEY;
let TARGET_ENVIRONMENT = "";
exports.TARGET_ENVIRONMENT = TARGET_ENVIRONMENT;
let URLS = {
    CREATE_USER: `${host}/v1_0/apiuser`,
    GET_USER: (Id) => `${host}/v1_0/apiuser/${Id}`,
    CREATE_API_KEY: (Id) => `${host}/v1_0/apiuser/${Id}/apikey`,
    CREATE_AUTH_TOKEN: `${host}/collection/token/`,
    REQUEST_TO_PAY: `${host}/collection/v1_0/requesttopay`,
    GET_REQUEST_TO_PAY_STATUS: (Id) => `${host}/collection/v1_0/requesttopay/${Id}`,
    REQUEST_TO_PAY_DELIVERY_NOTIFICATION: (Id) => `${host}/collection/v1_0/requesttopay/${Id}/deliverynotification`
}, USER = require('./user.json'), TOKEN = require('./token.json');
exports.URLS = URLS;
exports.USER = USER;
exports.TOKEN = TOKEN;
