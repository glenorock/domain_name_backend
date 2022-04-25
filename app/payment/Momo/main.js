"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestToPay = exports.generateAutorisationToken = exports.pay = exports.createSandboxUser = void 0;
const app_1 = __importDefault(require("./API/app"));
const constants_1 = __importDefault(require("./API/constants"));
const json_1 = __importDefault(require("../../utils/json"));
const config_1 = __importDefault(require("config"));
const createSandboxUser = () => {
    let user = {};
    return new Promise((resolve, reject) => {
        app_1.default.getReferenceId().then((value) => {
            user.reference_id = value;
            app_1.default.createUser(constants_1.default.URLS.CREATE_USER, value).then(() => {
                app_1.default.getUser(user.reference_id).then((value) => {
                    user.provider_callback_host = value.providerCallbackHost;
                    user.target_environment = value.targetEnvironment;
                    app_1.default.createAPIKey(user.reference_id).then((value) => {
                        user.api_key = value;
                        json_1.default.saveToFile(user, "./app/payment/Momo/API/user.json").then(() => {
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
        app_1.default.generateAuthentificationToken().then((value) => {
            token.access_token = value.access_token;
            token.token_type = value.token_type;
            token.expires_in = value.expires_in;
            json_1.default.saveToFile(token, './app/payment/Momo/API/token.json').then(() => {
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
        app_1.default.getReferenceId().then((id) => {
            data.reference_id = id;
            app_1.default.requestToPay(id, data).then(() => {
                app_1.default.getrequestToPayStatus(id).then((res) => {
                    out.request_status = res;
                    app_1.default.requestToPayDeliveryNotification(id, "Message").then((res) => {
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
