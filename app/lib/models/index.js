"use strict";
/**
 * @module Model
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainContactType = exports.DomainPeriodUnits = exports.EventTypes = exports.IpAddresseType = exports.PostalInfoType = void 0;
var PostalInfoType;
(function (PostalInfoType) {
    PostalInfoType["INT"] = "int";
    PostalInfoType["LOC"] = "loc";
})(PostalInfoType = exports.PostalInfoType || (exports.PostalInfoType = {}));
var IpAddresseType;
(function (IpAddresseType) {
    IpAddresseType["IPV4"] = "v4";
    IpAddresseType["IPV6"] = "v6";
})(IpAddresseType = exports.IpAddresseType || (exports.IpAddresseType = {}));
var EventTypes;
(function (EventTypes) {
    EventTypes[EventTypes["AccountCreation"] = 0] = "AccountCreation";
    EventTypes[EventTypes["DomainCreation"] = 1] = "DomainCreation";
    EventTypes[EventTypes["DomainUpdate"] = 2] = "DomainUpdate";
    EventTypes[EventTypes["ContactCreation"] = 3] = "ContactCreation";
})(EventTypes = exports.EventTypes || (exports.EventTypes = {}));
var DomainPeriodUnits;
(function (DomainPeriodUnits) {
    DomainPeriodUnits["YEARS"] = "y";
    DomainPeriodUnits["MONTHS"] = "m";
})(DomainPeriodUnits = exports.DomainPeriodUnits || (exports.DomainPeriodUnits = {}));
var DomainContactType;
(function (DomainContactType) {
    DomainContactType["ADMIN"] = "admin";
    DomainContactType["TECH"] = "tech";
})(DomainContactType = exports.DomainContactType || (exports.DomainContactType = {}));
