import * as momo from './Momo/main'
import * as om from './OM/main'

const options = {
    PayWithMomo: (number:string,cost:number) => momo.pay(number,cost),
    PayWithOM : (number:string,cost:number) => om.pay(number,cost)
}

const pay = (number:string,cost:number) =>{
    return options.PayWithMomo(number,cost)
}

export default {pay}