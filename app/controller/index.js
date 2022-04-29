"use strict";
/**
 * @module Controller
 */
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
exports.DomainController = exports.HostController = exports.ContactController = void 0;
const command_1 = require("./lib/command");
const _domain = __importStar(require("./lib/domain"));
const _contact = __importStar(require("./lib/contact"));
const _host = __importStar(require("./lib/hosts"));
const models_1 = require("../models");
var ContactController;
(function (ContactController) {
    ContactController.checkByEmail = (email) => {
        return command_1.Command.run(new command_1.Command(_contact.checkByEmail, email));
    };
    ContactController.checkById = (id) => {
        return command_1.Command.run(new command_1.Command(_contact.checkById, id));
    };
    ContactController.getDomains = (id) => {
        return command_1.Command.run(new command_1.Command(_contact.getDomains, id));
    };
    ContactController.getInfoByEmail = (email) => {
        return command_1.Command.run(new command_1.Command(_contact.getInfoByEmail, email));
    };
    ContactController.getInfoById = (id) => {
        return command_1.Command.run(new command_1.Command(_contact.getInfoById, id));
    };
    ContactController.register = (contact) => {
        return command_1.Command.run(new command_1.Command(_contact.register, contact));
    };
    ContactController.update = (contact) => {
        return command_1.Command.run(new command_1.Command(_contact.update, contact));
    };
})(ContactController = exports.ContactController || (exports.ContactController = {}));
var HostController;
(function (HostController) {
    function check(names) {
        return command_1.Command.run(new command_1.Command(_host.check, names));
    }
    HostController.check = check;
    function info(names) {
        return command_1.Command.run(new command_1.Command(_host.info, names));
    }
    HostController.info = info;
    function register(host) {
        return command_1.Command.run(new command_1.Command(_host.register, host));
    }
    HostController.register = register;
    function addAddress(host, addr) {
        return command_1.Command.run(new command_1.Command(_host.addAddress, host, addr));
    }
    HostController.addAddress = addAddress;
    function removeAddress(host, addr) {
        return command_1.Command.run(new command_1.Command(_host.removeAddress, host, addr));
    }
    HostController.removeAddress = removeAddress;
})(HostController = exports.HostController || (exports.HostController = {}));
var DomainController;
(function (DomainController) {
    function check(names) {
        return command_1.Command.run(new command_1.Command(_domain.check, names));
    }
    DomainController.check = check;
    function info(names) {
        return command_1.Command.run(new command_1.Command(_domain.info, names));
    }
    DomainController.info = info;
    function register(domain) {
        return command_1.Command.run(new command_1.Command(_domain.register, domain));
    }
    DomainController.register = register;
    function renew(domain, period, unit) {
        if (unit) {
            return command_1.Command.run(new command_1.Command(_domain.renew, domain, { unit: models_1.DomainPeriodUnits.YEARS, value: period }));
        }
        else {
            return command_1.Command.run(new command_1.Command(_domain.renew, domain, { unit: unit, value: period }));
        }
    }
    DomainController.renew = renew;
})(DomainController = exports.DomainController || (exports.DomainController = {}));
