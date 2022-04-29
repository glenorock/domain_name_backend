/**
 * @module Controller
 */

import { Command } from "./lib/command";
import * as _domain from './lib/domain';
import * as _contact from './lib/contact';
import { Contact } from "../models";

export namespace ContactController {
    export const checkByEmail = (email: string) => {
        return Command.run(new Command(_contact.checkByEmail, email))
    }
    export const checkById = (id: string) => {
        return Command.run(new Command(_contact.checkById, id))
    }
    export const getDomains = (id: string) => {
        return Command.run(new Command(_contact.getDomains, id))
    }
    export const getInfoByEmail = (email: string) => {
        return Command.run(new Command(_contact.getInfoByEmail, email))
    }
    export const getInfoById = (id: string) => {
        return Command.run(new Command(_contact.getInfoById, id))
    }
    export const register = (contact: Contact) => {
        return Command.run(new Command(_contact.register, contact))
    }
    export const update = (contact: Contact) => {
        return Command.run(new Command(_contact.update, contact))
    }
}

export namespace HostController {

}

export namespace DomainController {

}