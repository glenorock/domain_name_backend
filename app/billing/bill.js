const UnknownOperatorException = require('../exceptions/unKnownOperatorException')
const pay = require('./pay')
class Bill{
    constructor(cost,number){
        this.cost = cost
        this.number = number
        this.operator = this.#getOperator(number)
    }
    #getOperator(number){
        if(RegExp(/^6(5[0-4]|7\d|80)\d+$/).test(number)){
            return 'MTN'
        }else if (RegExp(/^6(9|5[5-9])\d+$/).test(number)){
            return 'ORANGE'
        }else{
            throw UnknownOperatorException;
        }
    }
    pay(){
        pay[this.operator](this.number,this.cost)
    }
}

module.exports = Bill