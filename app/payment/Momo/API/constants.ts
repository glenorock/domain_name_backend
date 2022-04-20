const host  = "https://sandbox.momodeveloper.mtn.com"

module.exports = {
    HOST: host,
    OCP_APIM_SUBSCRIPTION_KEY:"cf4b92034b7141a5b0eb554f13584296",
    PROVIDER_CALL_BACK_HOST: "localhost",
    API_KEY:"",
    TARGET_ENVIRONMENT:"",
    URLS: {
        CREATE_USER: `${host}/v1_0/apiuser`,
        GET_USER:(Id:String) => `${host}/v1_0/apiuser/${Id}`,
        CREATE_API_KEY: (Id:String) => `${host}/v1_0/apiuser/${Id}/apikey`,
        CREATE_AUTH_TOKEN: `${host}/collection/token/`,
        REQUEST_TO_PAY: `${host}/collection/v1_0/requesttopay`,
        GET_REQUEST_TO_PAY_STATUS: (Id:String) => `${host}/collection/v1_0/requesttopay/${Id}`,
        REQUEST_TO_PAY_DELIVERY_NOTIFICATION: (Id:String) => `${host}/collection/v1_0/requesttopay/${Id}/deliverynotification`
    },
    USER: require('./user.json'),
    TOKEN: require('./token.json')
}