const mtn = require('./mtn')
const orange = require('./orange')

const pay = {
    PayWithMomo: (number,cost) => mtn.pay(number,cost),
    PayWithOM : (number,cost) => orange.pay(number,cost)
}

module.exports = pay