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
Object.defineProperty(exports, "__esModule", { value: true });
const Model = __importStar(require("../../app/models"));
const controller_1 = require("../../app/controller");
controller_1.ContactController.checkByEmail(("email@tests.cm")).then((res) => {
    console.log("/***************************************/");
    console.log(res);
    console.log("/***************************************/");
}).then(() => {
    controller_1.ContactController.checkById("testId").then((res) => {
        console.log("/***************************************/");
        console.log(res);
        console.log("/***************************************/");
    }).then(() => {
        controller_1.ContactController.getDomains("testId").then((res) => {
            console.log("/***************************************/");
            console.log(res);
            console.log("/***************************************/");
        });
    });
}).then(() => {
    controller_1.ContactController.getInfoByEmail("email@tests.cm").then((res) => {
        console.log("/***************************************/");
        console.log(res);
        console.log("/***************************************/");
    }).then(() => {
        controller_1.ContactController.getInfoById("testId").then((res) => {
            console.log("/***************************************/");
            console.log(res);
            console.log("/***************************************/");
        }).then(() => {
            let contact = {
                id: "test id",
                voice: "test voice",
                fax: "test fax",
                email: "email@tests.cm",
                postalInfo: {
                    name: "test name",
                    org: "test org",
                    type: Model.PostalInfoType.INT,
                    addr: {
                        sp: "test sp",
                        city: "test ville",
                        pc: "test pc",
                        cc: "test cc",
                        street: ["street 1", "street 2", "street 3"]
                    }
                }
            };
            controller_1.ContactController.register(contact).then((res) => {
                console.log("/***************************************/");
                console.log(res);
                console.log("/***************************************/");
            }).then(() => {
                controller_1.ContactController.update(contact).then((res) => {
                    console.log("/***************************************/");
                    console.log(res);
                    console.log("/***************************************/");
                });
            });
        });
    });
});
