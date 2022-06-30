import axios from 'axios';
import config from 'config';

const baseURL: string = `http://${config.get("payment.host")}:${config.get("payment.port")}`;

export default function (method: string, url: string, data?: any) {
    let config: any = {
        url: url,
        method: method,
        baseURL: baseURL,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    if (data) {
        config["data"] = data;
    }
    return axios(config)
}
