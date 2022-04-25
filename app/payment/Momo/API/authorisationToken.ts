import * as constants from "./constants";
import axios from "axios";

const authorisationToken = () => {
    var username = constants.USER.reference_id;
    var password = constants.USER.api_key
    const token = `${username}:${password}`;
    const encodedToken = Buffer.from(token, 'utf8').toString('base64');
    let options: any = {

        headers: {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization": `Basic ${encodedToken}`
        },
    }
    let body = ""
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.post(
                constants.URLS.CREATE_AUTH_TOKEN,
                body,
                options
            )
        } catch (err) {
            reject(err)
        }
    })
}

export  { authorisationToken }