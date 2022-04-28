import * as constants from './constants'
import axios from 'axios'

const requestToPay = (reference_id: String, data: any) => {
    let options = {
        headers: {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization": `Bearer ${constants.TOKEN.access_token}`,
            "X-Reference-Id": `${reference_id}`,
            "X-Target-Environment": `${constants.USER.target_environment}`,
            "Content-Type": "application/json"
        },
    }
    let body =  JSON.stringify(
        {
            "amount": `${data.amount}`,
            "currency": `${data.currency}`,
            "externalId": `${data.externalId}`,
            "payer": {
                "partyIdType": "MSISDN",
                "partyId": `${data.payer.partyId}`
            },
            "payerMessage": `${data.payerMessage}`,
            "payeeNote": `${data.payeeNote}`
        }
    )
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.post(constants.URLS.REQUEST_TO_PAY,body,options)
            resolve(res)
        } catch (err) {
            reject(err)
        }
    })
}

const getRequestToPayStatus = (reference_id: String) => {
    let options:any = {
        headers: {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization": `Bearer ${constants.TOKEN.access_token}`,
            "X-Target-Environment": `${constants.USER.target_environment}`,
        }
    }

    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.get(constants.URLS.GET_REQUEST_TO_PAY_STATUS(reference_id),options)
            resolve(res)
        } catch (err) {
            reject(err)
        }
    })
}

const requestToPayDeliveryNotification = (reference_id: String, message: String) => {
    let options = {
        headers: {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization": `Bearer ${constants.TOKEN.access_token}`,
            "X-Target-Environment": `${constants.USER.target_environment}`,
            "notificationMessage": `${message}`,
            "Content-Type": "application/json"
        },
    }
    let body = JSON.stringify({
        "notificationMessage": `${message}`
    })
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.post(
                constants.URLS.REQUEST_TO_PAY_DELIVERY_NOTIFICATION(reference_id),
                body,
                options
            )
            resolve(res)
        } catch (err) {
            reject(err)
        }
    })
}

export {
    requestToPay,
    getRequestToPayStatus,
    requestToPayDeliveryNotification
}