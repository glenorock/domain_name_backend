"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../app/lib/utils/index");
let input = {
    "receivers": [
        "glen19.og@gmail.com",
        "gotang.megasoft@gmail.com"
    ]
};
index_1.Transporter.sendMail({ subject: "subject", message: "message", receivers: input.receivers });
