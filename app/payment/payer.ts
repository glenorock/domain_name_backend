const momo = require('./Momo/main')
const om = require('./OM/main')

const options = {
    PayWithMomo: (number:String,cost:Number) => momo.pay(number,cost),
    PayWithOM : (number:String,cost:Number) => om.pay(number,cost)
}

const pay = (number:String,cost:Number) =>{
    return options.PayWithMomo(number,cost)
}

module.exports = {pay}