"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_1 = require("../app/client/lib/connection/socket");
const client = socket_1.EppSocket.getInstance();
let out = [];
client.send("test1").then((res) => {
    out.push(res);
}).then(() => {
    client.send("test2").then((res) => {
        out.push(res);
    }).then(() => {
        client.send("test3").then((res) => {
            out.push(res);
        }).then(() => {
            client.send("test4").then((res) => {
                out.push(res);
            }).then(() => {
                client.send("test5").then((res) => {
                    out.push(res);
                }).then(() => {
                    client.send("test2").then((res) => {
                        out.push(res);
                    }).then(() => {
                        client.send("test3").then((res) => {
                            out.push(res);
                        }).then(() => {
                            client.send("test4").then((res) => {
                                out.push(res);
                            }).then(() => {
                                client.send("test5").then((res) => {
                                    out.push(res);
                                }).then(() => {
                                    client.send("test2").then((res) => {
                                        out.push(res);
                                    }).then(() => {
                                        client.send("test3").then((res) => {
                                            out.push(res);
                                        }).then(() => {
                                            client.send("test4").then((res) => {
                                                out.push(res);
                                            }).then(() => {
                                                client.send("test5").then((res) => {
                                                    out.push(res);
                                                    console.log(client);
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
