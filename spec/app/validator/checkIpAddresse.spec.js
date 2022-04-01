describe("IpAddresse Validator",() =>{
    const validator = require("../../../app/validator/checkIpAddresse")
    const input = require('./data/ipAddress.input.json')
    it("should follow the general format of ip addresses",() =>{
        input.format.truthy.forEach((ele) =>{
            expect(validator.checkFormat(ele)).toEqual(true)
        })
        input.format.falsy.forEach((ele) =>{
            expect(validator.checkFormat(ele)).toEqual(false)
        })
    })
    // it("should be accessible over the internet", async () =>{
    //     await input.availability.truthy.forEach(async (ele) =>{
    //         let res = validator.checkAvailability(ele)
    //         res.then((out) =>{
    //             print(out)
    //             expect(res).toBeDefined()
    //         })
    //     })
    //     await input.availability.falsy.forEach(async (ele) =>{
    //         let res = false //await validator.checkAvailability(ele)
    //         // expect(res).toEqual(false)
    //     })
    // })
})