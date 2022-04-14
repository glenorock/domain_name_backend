const axios = require('axios')
const constants = require('./constants')

const createUser = (url, referenceId) => {
    let options = {
        "headers": {
            "X-Reference-Id": referenceId,
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
            "Content-Type": "application/json"
        },
    }
    let body = {
        "providerCallbackHost": constants.PROVIDER_CALL_BACK_HOST
    }
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.post(constants.URLS.CREATE_USER, body, options)
            resolve(res)
        } catch (err) {
            reject(err)
        }
    })
}

const getUserInfo = (referenceId) => {
    let options = {
        "headers": {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
        },
    }
    return new Promise(async (resolve, reject) => {
        try{
            let res = await axios.get(constants.URLS.GET_USER(referenceId),options)
            if(res.status === 200){
                resolve(res.data)
            }else{
                reject(res)
            }
        }catch(error){
            reject(error)
        }
    })
}

const createAPIKey = (referenceId) =>{
    let options = {
        "headers": {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
        },
    }
    let body = ""
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.post(constants.URLS.CREATE_API_KEY(referenceId), body, options)
            if(res.status === 201){
                resolve(res.data.apiKey)
            }else{
                reject(res)
            }
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = {
    createUser,
    getUserInfo,
    createAPIKey
}