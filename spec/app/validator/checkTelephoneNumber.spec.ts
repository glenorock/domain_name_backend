describe("Telephone number validator", () =>{
    const validator = require('../../../app/validator/checkTelephoneNumber')
    let inputs = require('./data/telephone.input.json')

    it("telephone numbers should have exactly 9 figures",() =>{
        inputs.lenght.correct.forEach((tmp:string) =>{
            expect(validator.checkLength(tmp)).toEqual(true)
        })
        inputs.lenght.faulsy.forEach((tmp:string) =>{
            expect(validator.checkLength(tmp)).toEqual(false)
        })
    })
    it("telephone numbers should be made up only of figures",() =>{
        inputs.number.correct.forEach((tmp:string) =>{
            expect(validator.checkNumber(tmp)).toEqual(true)
        })
        inputs.number.faulsy.forEach((tmp:string) =>{
            expect(validator.checkNumber(tmp)).toEqual(false)
        })
    })
    it("it should accept the operators are MTN and Orange and nothing else",() =>{
        inputs.operator.mtn.forEach((tmp:string) =>{
            expect(validator.checkOperator(tmp)).toEqual(true)
        })
        inputs.operator.orange.forEach((tmp:string) =>{
            expect(validator.checkOperator(tmp)).toEqual(true)
        })
        inputs.operator.other.forEach((tmp:string) =>{
            expect(validator.checkOperator(tmp)).toEqual(false)
        })  
    })
})