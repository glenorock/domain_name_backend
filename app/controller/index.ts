/**
 * @module Controller
 */

import { Command } from "./lib/command";
import * as _domain from './lib/domain';
import * as _contact from './lib/contact';
import * as _host from './lib/hosts';

import { Contact, Host, IpAddresse } from "../models";

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
    export function check(...names:string[]){
        return Command.run(new Command(_host.check,names))
    }
    
    export function info(...names:string[]){
        return Command.run(new Command(_host.info,names))
    }
    
    export function register(host:Host){
        return Command.run(new Command(_host.register,host))
    }
    
    export function addAddress(host:Host,...addr:IpAddresse[]){
        return Command.run(new Command(_host.addAddress,host,addr))
    }
    
    export function removeAddress(host:Host,...addr:IpAddresse[]){
        return Command.run(new Command(_host.removeAddress,host,addr))
    }
    
}

export namespace DomainController {
    
}