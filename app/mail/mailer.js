const Genrator = require('./generator')
const transporter = require('./transporter')

const sendMail = (event, receiver) => {
    let generator = Genrator[event]
    let subject = generator.message
    let message = generator.parse()
    let receiver = receiver
    return transporter.send(subject, message, receiver)

}

module.exports = {sendMail}