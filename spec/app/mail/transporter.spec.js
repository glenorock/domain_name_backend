describe("Sending email",() =>{
    const transporter = require('../../../app/mail/transporter')
    const input =  require('./data/email.input.json')

    it("should be able to send an email to an adresse",() =>{
        input.receivers.forEach(async (ele) =>{
            transporter.send("subject","message",ele);
        })
    })

    it("should be able to send bulk messages to an adresse",async () =>{
        transporter.sendBulk("subject","message",input.receivers)
    })
})