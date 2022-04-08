describe("Domain name validator", () => {
    const validator = require("../../../app/validator/checkDomain")
    const input = require('./data/domain.input.json')

    it("should be composed of letters (upper and lower case), numbers or '-' with the exception of all other symbols and if be composed of atleast 2 letters or a letter and a number", () => {
        input.constitution.valid.forEach((ele) => {
            expect(validator.checkConstitution(ele)).toEqual(true)
        })
        input.constitution.invalid.forEach((ele) => {
            expect(validator.checkConstitution(ele)).toEqual(false)
        })
    })

    it("should have at least 2 characters and at most 63 characters", () => {
        input.lenght.valid.forEach((ele) => {
            expect(validator.checkLength(ele)).toEqual(true)
        })
        input.lenght.invalid.forEach((ele) => {
            expect(validator.checkLength(ele)).toEqual(false)
        })
    })

    it("should be void of all black listed words", () => {
        input.whiteList.valid.forEach((ele) => {
            expect(validator.checkWhiteListed(ele)).toEqual(true)
        })
        input.whiteList.invalid.forEach((ele) => {
            expect(validator.checkWhiteListed(ele)).toEqual(false)
        })
    })
})