import * as generator from 'generate-password'

export const generatePassword = ():string => {
    let password = generator.generate({
        length: 10,
        numbers: true,
        excludeSimilarCharacters: true,
        strict: true
    });
    return password
}

export const generateDate = ():string => {
    const d = new Date()
    let month = String(d.getMonth() + 1)
    if (month.length === 1) {
        let tmp = "0".concat(month)
        month = tmp
    }
    let year = String(d.getFullYear())
    return month.concat(year.charAt(2)).concat(year.charAt(3))
}

export const generateNumber = (length:number) => {
    return "x".repeat(length).replace(/x/g, x => String(Math.random() * 10 | 0))
}

export const generateContactIdentifier = (name:string) => {
    let id = String(name).replace(/ +/g, "").slice(0, 6)
    return id.concat(generateDate()).concat('-').concat(generateNumber(5))

}