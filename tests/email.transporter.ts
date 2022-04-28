import  {Transporter} from '../app/lib/utils/index'

let input = {
    "receivers" : [
        "glen19.og@gmail.com",
        "gotang.megasoft@gmail.com"
    ]
}

Transporter.sendMail({subject:"subject",message:"message",receivers:input.receivers});