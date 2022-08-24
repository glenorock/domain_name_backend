import axios from 'axios';
import config from 'config';

const baseURL: string = `http://${config.get("payment.host")}:${config.get("payment.port")}`;

export default function (method: string, url: string, data?: any) {
    const conf: any = {
        url,
        method,
        baseURL,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    if (data) {
        conf.data = JSON.stringify(data);
    }
    return axios(conf)
}

export const campayPaymentRoutes = {
    token:"/campay/token",
    requestPayment:"/campay/request/payment",
    status:"/campay/transaction/status"
}