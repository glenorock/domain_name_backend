"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../../app/controller");
controller_1.ContactController.checkByEmail(("email@tests.cm")).then((res) => {
    console.log("/***************************************/");
    console.log(res);
    console.log("/***************************************/");
});
// .then(() => {
//     ContactController.checkById("testId").then((res) => {
//         console.log("/***************************************/")
//         console.log(res)
//         console.log("/***************************************/")
//     })
//     // .then(() => {
//     ContactController.getDomains("testId").then((res) => {
//         console.log("/***************************************/")
//         console.log(res)
//         console.log("/***************************************/")
//     })
// })
// }).then(() => {
//     ContactController.getInfoByEmail("email@tests.cm").then((res) => {
//         console.log("/***************************************/")
//         console.log(res)
//         console.log("/***************************************/")
//     }).then(() => {
//         ContactController.getInfoById("testId").then((res) => {
//             console.log("/***************************************/")
//             console.log(res)
//             console.log("/***************************************/")
//         }).then(() => {
//             let contact: Model.Contact = {
//                 id: "test id",
//                 voice: "test voice",
//                 fax: "test fax",
//                 email: "email@tests.cm",
//                 postalInfo: {
//                     name: "test name",
//                     org: "test org",
//                     type: Model.PostalInfoType.INT,
//                     addr: {
//                         sp: "test sp",
//                         city: "test ville",
//                         pc: "test pc",
//                         cc: "test cc",
//                         street: ["street 1", "street 2", "street 3"]
//                     }
//                 }
//             }
//             ContactController.register(contact).then((res) => {
//                 console.log("/***************************************/")
//                 console.log(res)
//                 console.log("/***************************************/")
//             }).then(() => {
//                 ContactController.update(contact).then((res) => {
//                     console.log("/***************************************/")
//                     console.log(res)
//                     console.log("/***************************************/")
//                 })
//             })
//         })
//     })
// })
