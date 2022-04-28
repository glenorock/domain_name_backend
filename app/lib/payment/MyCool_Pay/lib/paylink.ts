import axios from 'axios'
import * as constants from './constants'

export const paylink = () => {
    var body: any = JSON.stringify({
        "transaction_amount": 100,
        "transaction_currency": "XAF",
        "transaction_reason": "Bic pen",
        "app_transaction_ref": "order_123",
        "customer_phone_number": "683293295",
        "customer_name": "OTANG GLEN",
        "customer_email": "glen19.og@gmail.com",
        "customer_lang": "en"
    });

    var requestOptions: any = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        redirect: 'follow'
    };

    return new Promise(async (resolve, reject) => {
        axios.post(
            constants.PAYLINK,
            body,
            requestOptions
        ).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })

    })
}

