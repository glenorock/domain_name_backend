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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestToPay = exports.generateAutorisationToken = exports.pay = exports.createSandboxUser = void 0;
const api = __importStar(require("./API/app"));
const constants = __importStar(require("./API/constants"));
const Utils = __importStar(require("../../utils/index"));
const json = Utils.JSON;
const config_1 = __importDefault(require("config"));
const createSandboxUser = () => {
    let user = {};
    return new Promise((resolve, reject) => {
        api.getReferenceId().then((value) => {
            user.reference_id = value;
            api.createUser(constants.URLS.CREATE_USER, value).then(() => {
                api.getUser(user.reference_id).then((value) => {
                    user.provider_callback_host = value.providerCallbackHost;
                    user.target_environment = value.targetEnvironment;
                    api.createAPIKey(user.reference_id).then((value) => {
                        user.api_key = value;
                        json.saveToFile(user, "./app/payment/Momo/API/user.json").then(() => {
                            resolve(user);
                        }).catch((err) => {
                            reject(err);
                        });
                    }).catch((err) => reject(err));
                }).catch((err) => {
                    reject(err);
                });
            }).catch((err) => {
                reject(err);
            });
        }).catch((err) => {
            reject(err);
        });
    });
};
exports.createSandboxUser = createSandboxUser;
const generateAutorisationToken = () => {
    return new Promise((resolve, reject) => {
        let token = {};
        api.generateAuthentificationToken().then((value) => {
            token.access_token = value.access_token;
            token.token_type = value.token_type;
            token.expires_in = value.expires_in;
            json.saveToFile(token, './app/payment/Momo/API/token.json').then(() => {
                resolve(token);
            }).catch((err) => { reject(err); });
        }).catch((err) => reject(err));
    });
};
exports.generateAutorisationToken = generateAutorisationToken;
const requestToPay = (number) => {
    let out = {};
    let data = {
        amount: `${config_1.default.get("payment.cost")}`,
        currency: `EUR`,
        externalId: `${Date.now()}`,
        payer: {
            partyIdType: "MSISDN",
            partyId: `${number}`
        },
        payerMessage: `${config_1.default.get("payment.payer_message")}`,
        payeeNote: `${config_1.default.get("payment.payee_note")}`,
    };
    return new Promise((resolve, reject) => {
        api.getReferenceId().then((id) => {
            data.reference_id = id;
            api.requestToPay(id, data).then(() => {
                api.getrequestToPayStatus(id).then((res) => {
                    out.request_status = res;
                    api.requestToPayDeliveryNotification(id, "Message").then((res) => {
                        resolve(res);
                    }).catch((err) => { reject(err); });
                }).catch((err) => { reject(err); });
            }).catch((err) => { reject(err); });
        }).catch((err) => { reject(err); });
    });
};
exports.requestToPay = requestToPay;
const pay = (number, amount) => {
    return new Promise((resolve, reject) => {
        resolve("Done");
    });
};
exports.pay = pay;
