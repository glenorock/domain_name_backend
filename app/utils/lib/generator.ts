import * as generator from 'generate-password'


/**
 * @description generates a random string of lenght 10 
 * @returns a string of lenght 10
 */
const generatePassword = ():string => {
    let password = generator.generate({
        length: 10,
        numbers: true,
        excludeSimilarCharacters: true,
        strict: true
    });
    return password
}

/**
 * @description generates the date in the format {month}{year}
 * @returns the date in the said format
 */
const generateDate = ():string => {
    const d = new Date()
    let month = String(d.getMonth() + 1)
    if (month.length === 1) {
        let tmp = "0".concat(month)
        month = tmp
    }
    let year = String(d.getFullYear())
    return month.concat(year.charAt(2)).concat(year.charAt(3))
}

/**
 * @description generates a random string of numbers of a given length 
 * @param length the length of the to be generated string
 * @returns a string of length <b> length </b>
 */
const generateNumber = (length:number) => {
    return "x".repeat(length).replace(/x/g, x => String(Math.random() * 10 | 0))
}

/**
 * @description generates a contact id for a contact from his name.
 * @param name the contact's name
 * @returns a contact id
 */
const generateContactIdentifier = (name:string) => {
    let id = String(name).replace(/ +/g, "").slice(0, 6)
    return id.concat(generateDate()).concat('-').concat(generateNumber(5))

}


export {
    generateDate,
    generateNumber,
    generateContactIdentifier,
    generatePassword,
}