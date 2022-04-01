describe("Email Validator: ",() =>{
    const validator = require("../../../app/validator/checkEmail")
    const input = require('./data/email.input.json')
    it("should follow the general format of emails",() =>{
        input.truthy.forEach((tmp) =>{
            expect(validator.check(tmp)).toEqual(true)
        })
        tmp = input.falsy.forEach((tmp) =>{
            expect(validator.check(tmp)).toEqual(false)
        })
    })
})