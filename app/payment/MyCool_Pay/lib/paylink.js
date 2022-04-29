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
exports.paylink = void 0;
const axios_1 = __importDefault(require("axios"));
const constants = __importStar(require("./constants"));
const paylink = () => {
    var body = JSON.stringify({
        "transaction_amount": 100,
        "transaction_currency": "XAF",
        "transaction_reason": "Bic pen",
        "app_transaction_ref": "order_123",
        "customer_phone_number": "683293295",
        "customer_name": "OTANG GLEN",
        "customer_email": "glen19.og@gmail.com",
        "customer_lang": "en"
    });
    var requestOptions = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        redirect: 'follow'
    };
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.post(constants.PAYLINK, body, requestOptions).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    }));
};
exports.paylink = paylink;
