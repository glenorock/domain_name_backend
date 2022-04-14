const generatePassword = () => {
    const generator = require('generate-password');
    let password = generator.generate({
        length: 10,
        numbers: true,
        excludeSimilarCharacters: true,
        strict: true
    });
    return password
}

const getDate = () => {
    const d = new Date()
    let month = String(d.getMonth() + 1)
    if (month.length === 1) {
        let tmp = "0".concat(month)
        month = tmp
    }
    let year = String(d.getFullYear())
    return month.concat(year.charAt(2)).concat(year.charAt(3))
}
const generateNumber = (length) => {
    return "x".repeat(length).replace(/x/g, x => Math.random() * 10 | 0)
}
const generateContactIdentifier = (name) => {
    let id = String(name).replace(/ +/g, "").slice(0, 6)
    return id.concat(getDate()).concat('-').concat(generateNumber(5))

}

module.exports = {
    generateContactIdentifier,
    generatePassword
}