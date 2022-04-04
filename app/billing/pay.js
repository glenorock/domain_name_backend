const mtn = require('./mtn')
const orange = require('./orange')

const pay = {
    MTN: (number) => mtn.pay(number,cost),
    ORANGE : (number) => orange.pay(number,cost)
}

module.exports = pay