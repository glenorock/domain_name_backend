const constants = require('./constants')
const request = require('request')

const requestToPay = (reference_id,data) => {
    let options = {
        url: constants.URLS.REQUEST_TO_PAY,
        method: 'POST',
        headers: {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization": `Bearer ${constants.TOKEN.access_token}`,
            "X-Reference-Id": `${reference_id}`,
            "X-Target-Environment": `${constants.USER.target_environment}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
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
    }
    return new Promise((resolve, reject) => {
        try {
            request(options, (error, response, body) => {
                if (error) {
                    reject(error)
                }
                resolve(response.toJSON())
            })
        } catch (err) {
            reject(err)
        }
    })
}

const getRequestToPayStatus = (reference_id) => {
    let options = {
        url: constants.URLS.GET_REQUEST_TO_PAY_STATUS(reference_id),
        method: 'GET',
        headers: {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization": `Bearer ${constants.TOKEN.access_token}`,
            "X-Target-Environment": `${constants.USER.target_environment}`,
        }
    }

    return new Promise((resolve, reject) => {
        try {
            request(options, (error, response, body) => {
                if (error) {
                    reject(error)
                }
                resolve(response.toJSON())
            })
        } catch (err) {
            reject(err)
        }
    })
}

const requestToPayDeliveryNotification = (reference_id,message) => {
    let options = {
        url: constants.URLS.REQUEST_TO_PAY_DELIVERY_NOTIFICATION(reference_id),
        method: 'POST',
        headers: {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization": `Bearer ${constants.TOKEN.access_token}`,
            "X-Target-Environment": `${constants.USER.target_environment}`,
            "notificationMessage": `${message}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "notificationMessage": `${message}`
        })
    }
    console.log(options)
    return new Promise((resolve, reject) => {
        try {
            request(options, (error, response, body) => {
                if (error) {
                    reject(error)
                }
                resolve(response.toJSON())
            })
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = {
    requestToPay,
    getRequestToPayStatus,
    requestToPayDeliveryNotification
}