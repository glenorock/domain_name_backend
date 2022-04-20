const constants = require('./constants')
const request = require('request')

const authorisationToken = () =>{
    var username = constants.USER.reference_id;
    var password = constants.USER.api_key
    const token = `${username}:${password}`;
    const encodedToken = Buffer.from(token,'utf8').toString('base64');
    let options = {
        url: constants.URLS.CREATE_AUTH_TOKEN,
        method: 'POST',
        headers: {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization":  `Basic ${encodedToken}`
        },
        body:""
    }
    return new Promise(async (resolve, reject) => {
        try {
            request(options,(error:any,response:any,body:any) => {
                if(error){
                    reject(error)
                }
                resolve(JSON.parse(body))
            })
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = {authorisationToken}