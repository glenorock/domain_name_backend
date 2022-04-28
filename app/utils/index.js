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
exports.XML = exports.Transporter = exports.Settings = exports.Logger = exports.JSON = exports.Generator = void 0;
/**
 * @module Utils
 */
const _generator = __importStar(require("./lib/generator"));
const _json = __importStar(require("./lib/json"));
const _logger = __importStar(require("./lib/logger"));
const _settings = __importStar(require("./lib/settings"));
const _transporter = __importStar(require("./lib/transporter"));
const _xml = __importStar(require("./lib/xml"));
var Generator;
(function (Generator) {
    /**
     * @description generates the date in the format {month}{year}
     * @returns the date in the said format
    */
    Generator.generateDate = _generator.generateDate;
    /**
     * @description generates a random string of numbers of a given length
     * @param length the length of the to be generated string
     * @returns a string of length <b> length </b>
    */
    Generator.generateNumber = _generator.generateNumber;
    /**
     * @description generates a contact id for a contact from his name.
     * @param name the contact's name
     * @returns a contact id
    */
    Generator.generateContactIdentifier = _generator.generateContactIdentifier;
    /**
     * @description generates a random string of lenght 10
     * @returns a string of lenght 10
     */
    Generator.generatePassword = _generator.generatePassword;
    /**
     * @description generates a mail based on an event
     * @param event the event which trigered the  mail
     * @param receivers the email addresses of the mail's receivers
     */
    Generator.generateMesage = _generator.generateMessage;
})(Generator = exports.Generator || (exports.Generator = {}));
var JSON;
(function (JSON) {
    /**
     * @description saves data into a file in json format
     * @param data a dictionary
     * @file the name path to the file where the data would be saved
     */
    JSON.saveToFile = _json.saveToFile;
})(JSON = exports.JSON || (exports.JSON = {}));
var Logger;
(function (Logger_1) {
    Logger_1.Logger = _logger.Logger;
    Logger_1.Logger.prototype = Object.create(_logger.Logger.prototype);
})(Logger = exports.Logger || (exports.Logger = {}));
var Settings;
(function (Settings) {
    /**
     * @description updates the settings file
     * @param property the property to be changes
     * @param value the new value of the property
     */
    Settings.update = _settings.update;
    /**
     * @description adds a word or list of words to the blacklist
     * @@param words a word or list of words
     */
    Settings.addBlacklist = _settings.addBlacklist;
})(Settings = exports.Settings || (exports.Settings = {}));
var Transporter;
(function (Transporter) {
    /**
     * @description sends a message to the epp server
     * @param message
     */
    Transporter.send = _transporter.send;
    /**
     * @description connects to the epp server
     */
    Transporter.connect = _transporter.connect;
    /**
     * @description disconnects from the epp server
     */
    Transporter.close = _transporter.close;
    /**
     * @description sends an email passed as parameters
     * @param mail the mail to be sent
     */
    Transporter.sendMail = _transporter.sendMail;
})(Transporter = exports.Transporter || (exports.Transporter = {}));
var XML;
(function (XML) {
    /**
     * @description converts an xml string to a json format for easier manipulation
     * @param xml
     */
    XML.toJson = _xml.toJson;
})(XML = exports.XML || (exports.XML = {}));
