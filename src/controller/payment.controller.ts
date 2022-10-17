import * as URLS from '../config/compay.config';
import config from 'config';
import axios from 'axios';

export const getToken = (user: any) => {
    const headers = {
        'Content-Type': 'application/json',
    }
    const data = user
    const options = {
        headers,
    }
    return new Promise((resolve, reject) => {
        axios.post(URLS.GETTOKEN, data, options)
            .then(res => {
                resolve(res.data.token)
            })
            .catch(err => {
                reject(err)
            })
    });
}

export const balance = (token: string) => {
    const conf: any = {
        method: 'get',
        url: URLS.GETBALANCE,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
    };
    return new Promise((resolve, reject) => {
        axios(conf)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    });
}

export const getTransactionStatus = (token: string, ref: string) => {
    const conf: any = {
        method: 'get',
        url: URLS.TRANSACTIONSTATUS(ref),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
    };
    return new Promise((resolve, reject) => {
        axios(conf)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    });
}

export const getHistory = (token: string, body: any) => {
    const conf: any = {
        method: 'post',
        url: URLS.HISTORY,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        data: body
    };
    return new Promise((resolve, reject) => {
        axios(conf)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    });
}

export const requestPayment = (token: string, body: any) => {
    const conf: any = {
        method: 'post',
        url: URLS.REQUESTPAYMENT,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        data: body
    };
    return new Promise((resolve, reject) => {
        axios(conf)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    });
}

export const requestWithdrawal = (token: string, body: any) => {
    const conf: any = {
        method: 'post',
        url: URLS.WITHDRAW,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        data: body
    };
    return new Promise((resolve, reject) => {
        axios(conf)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    });
}

export const pay = async (body: any) => {
    const user: any = config.get("payment.campay");
    const token: any = await getToken(user);
    const req: any = await requestPayment(String(token), body)
    const ref: string = req?.reference;
    let status: any = await getTransactionStatus(String(token), ref)
    while (status.status === "PENDING") {
        status = await getTransactionStatus(String(token), ref);
    }
    return status;
}
