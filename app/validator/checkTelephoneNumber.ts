const checkLength = (phone:string) =>{
    let tel = String(phone)
    if (tel.length === 9){
        return true
    }else{
        return false
    }
}

const checkNumber = (phone:string) =>{
    let tel = String(phone)
    let regex = RegExp(/^\d+$/)
    return regex.test(tel)
}

const checkOperator = (phone:string) =>{
    let tel = String(phone)
    let mtnReg =RegExp(/^6(5[0-4]|7\d|80)\d+$/)
    let orangeReg =RegExp(/^6(9|5[5-9])\d+$/)
    if (mtnReg.test(tel) || orangeReg.test(tel)){
        return true
    }else{
        return false
    }
}

export default {
    checkLength,
    checkNumber,
    checkOperator
}