const Genrator = require('./generator')
const transporter = require('./transporter')
class Mail{
    constructor(event,receiver){
        let generator =  Genrator[event]
        this.subject = generator.message
        this.message = generator.parse()
        this.receiver = receiver        
    }

    send(){
        transporter.send(this.subject,this.message,this.receiver)
    }
}

module.exports = Mail