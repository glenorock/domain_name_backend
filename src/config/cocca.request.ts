import axios from 'axios';
import config from 'config';

const baseURL: string = `http://${config.get("epp.host")}:${config.get("epp.port")}`;

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
        conf.data = data;
    }
    return axios(conf)
}
