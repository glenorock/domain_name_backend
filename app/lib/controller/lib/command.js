"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
class Command {
    constructor(exec) {
        this.run = (...args) => {
            let params = args;
            console.log(args);
            switch (params.length) {
                case 0:
                    return this.exec.call(this);
                case 1:
                    return this.exec.call(this, params[0]);
                case 2:
                    return this.exec.call(this, params[0], params[1]);
                case 3:
                    return this.exec.call(this, params[0], params[1], params[2]);
                case 4:
                    return this.exec.call(this, params[0], params[1], params[2], params[3]);
            }
        };
        this.exec = exec;
    }
}
exports.Command = Command;
