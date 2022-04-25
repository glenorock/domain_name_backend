"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTypes = void 0;
var EventTypes;
(function (EventTypes) {
    EventTypes[EventTypes["AccountCreation"] = 0] = "AccountCreation";
    EventTypes[EventTypes["DomainCreation"] = 1] = "DomainCreation";
    EventTypes[EventTypes["DomainUpdate"] = 2] = "DomainUpdate";
    EventTypes[EventTypes["ContactCreation"] = 3] = "ContactCreation";
})(EventTypes || (EventTypes = {}));
exports.EventTypes = EventTypes;
