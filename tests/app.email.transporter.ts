import transporter from '../app/mail/transporter'

let input = {
    "receivers" : [
        "glen19.og@gmail.com",
        "gotang.megasoft@gmail.com"
    ]
}

transporter.send({subject:"subject",message:"message",receivers:input.receivers});