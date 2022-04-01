const transporter = require('../app/mail/transporter')

input = {
    "receivers" : [
        "glen19.og@gmail.com",
        "gotang.megasoft@gmail.com"
    ]
}

input.receivers.forEach(async (ele) =>{
    transporter.send("subject","message",ele);
})

transporter.sendBulk("subject","message",input.receivers)