const mailjet = require ('node-mailjet').connect('657111ad6fa6a6426c1c89902fa5cf6a', '79f604beafb1e67a7e57dca9a8fc4eb3')

const sendMail = async (data) => {
    const request = mailjet
        .post("send", {'version': 'v3.1'})
        .request({
            "Messages":[
                {
                "From": {
                    "Email": "glen19.og@gmail.com",
                    "Name": "Otang"
                },
                "To": [
                    {
                    "Email": data.email,
                    "Name": data.name
                    }
                ],
                "Subject": "Greetings from Mailjet.",
                "TextPart": "My first Mailjet email",
                "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
                "CustomID": "AppGettingStartedTest"
                }
            ]
        })
    request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })
}

module.exports = {
    sendMail
}