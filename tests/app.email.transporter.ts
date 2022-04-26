import  {Transporter} from '../app/utils/index'

let input = {
    "receivers" : [
        "glen19.og@gmail.com",
        "gotang.megasoft@gmail.com"
    ]
}

Transporter.sendMail({subject:"subject",message:"message",receivers:input.receivers});