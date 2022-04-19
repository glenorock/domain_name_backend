const momo = require('./Momo/main')
const om = require('./OM/main')

const options = {
    PayWithMomo: (number,cost) => momo.pay(number,cost),
    PayWithOM : (number,cost) => om.pay(number,cost)
}

const pay = () =>{
    return options.PayWithMomo()
}

module.exports = {pay}