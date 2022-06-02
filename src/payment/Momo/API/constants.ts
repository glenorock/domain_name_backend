const host  = "https://sandbox.momodeveloper.mtn.com"

let HOST = host
let OCP_APIM_SUBSCRIPTION_KEY = "cf4b92034b7141a5b0eb554f13584296"
let PROVIDER_CALL_BACK_HOST = "localhost"
let API_KEY = ""
let TARGET_ENVIRONMENT=""
let URLS = {
    CREATE_USER : `${host}/v1_0/apiuser`,
    GET_USER: (Id:String) => `${host}/v1_0/apiuser/${Id}`,
    CREATE_API_KEY : (Id:String) => `${host}/v1_0/apiuser/${Id}/apikey`,
    CREATE_AUTH_TOKEN : `${host}/collection/token/`,
    REQUEST_TO_PAY : `${host}/collection/v1_0/requesttopay`,
    GET_REQUEST_TO_PAY_STATUS : (Id:String) => `${host}/collection/v1_0/requesttopay/${Id}`,
    REQUEST_TO_PAY_DELIVERY_NOTIFICATION : (Id:String) => `${host}/collection/v1_0/requesttopay/${Id}/deliverynotification`
},
USER = require('./user.json'),
TOKEN = require('./token.json')

export {
    HOST,
    OCP_APIM_SUBSCRIPTION_KEY,
    PROVIDER_CALL_BACK_HOST,
    API_KEY,
    TARGET_ENVIRONMENT,
    URLS,
    USER,
    TOKEN
}
