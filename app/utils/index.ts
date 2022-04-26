/**
 * @module Utils
 */
import * as _generator from './lib/generator'
import * as _json from './lib/json'
import * as _logger from './lib/logger'
import * as _settings from './lib/settings'
import * as _transporter from './lib/transporter'
import * as _xml from './lib/xml'

export namespace Generator {
    /**
     * @description generates the date in the format {month}{year}
     * @returns the date in the said format
    */
    export const generateDate = _generator.generateDate

    /**
     * @description generates a random string of numbers of a given length 
     * @param length the length of the to be generated string
     * @returns a string of length <b> length </b>
    */
    export const generateNumber = _generator.generateNumber

    /**
     * @description generates a contact id for a contact from his name.
     * @param name the contact's name
     * @returns a contact id
    */
    export const generateContactIdentifier = _generator.generateContactIdentifier

    /**
     * @description generates a random string of lenght 10 
     * @returns a string of lenght 10
     */
    export const generatePassword = _generator.generatePassword
}

export namespace JSON {
    /**
     * @description saves data into a file in json format
     * @param data a dictionary 
     * @file the name path to the file where the data would be saved
     */
    export const saveToFile = _json.saveToFile
}

export namespace Logger {
    export const Logger = _logger.Logger.prototype
}

export namespace Settings {
    /**
     * @description updates the settings file
     * @param property the property to be changes
     * @param value the new value of the property
     */
    export const update = _settings.update

    /**
     * @description adds a word or list of words to the blacklist
     * @@param words a word or list of words
     */
    export const addBlacklist = _settings.addBlacklist
}

export namespace Transporter {
    /**
     * @description sends a message to the epp server
     * @param message
     */
    export const send  = _transporter.send
    
    /**
     * @description connects to the epp server
     */
    export const connect = _transporter.connect
    
    /**
     * @description disconnects from the epp server
     */
    export const close = _transporter.close
}

export namespace XML {
    /**
     * @description converts an xml string to a json format for easier manipulation
     * @param xml
     */
    export const toJson = _xml.toJson 
}