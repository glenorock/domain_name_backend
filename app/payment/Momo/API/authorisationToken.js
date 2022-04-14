const axios =  require('axios')
const constants = require('./constants')

const authorisationToken = () =>{
    var username = constants.USER.reference_id;
    var password = constants.USER.api_key
    const token = `${username}:${password}`;
    const encodedToken = Buffer.from(token,'utf8').toString('base64');
    let options = {
        "headers": {
            "Ocp-Apim-Subscription-Key": constants.OCP_APIM_SUBSCRIPTION_KEY,
            "Authorization":  `Basic ${encodedToken}`
        },
    }
    let body = ""
    
    return new Promise(async (resolve, reject) => {
        let out = {}
        out = {
            "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSMjU2In0.eyJjbGllbnRJZCI6IjQzMDA3NTY0LWUwNzgtNGI5Zi04NjM3LWQzN2ZmMzdmMGU0YyIsImV4cGlyZXMiOiIyMDIyLTA0LTE0VDEyOjIzOjU5LjQzNCIsInNlc3Npb25JZCI6IjhmYTFhYTllLWM4NTgtNDQxMy04YmU0LWQxMGQ3ZWM0MGQ0OCJ9.O5H3i3xrnVYR9lFTMElDki6MCdJw2R7HGF8cVVM4-0jXMYXhxVHGLQiioXz0vka5DnNOQzwvctOFpTzdCT62rT4FN_nid0kjUiH7KYSuuL3sckpQPWrWG2yZ9lu8gQyWJJuW_6N4Tk0VRO-fqd0lI3Yi19F-Mw2G6kbAKEabNBlB9n-yPzmbzBO-q0SeIUIbbb6MH36AV3wQWWUok7O0akN4PJ064otGfyYY5FSxOXCSvHaixci1LdYCWRr6r4nG3w23LdEZILgjwXKkYrMoh-5u_woX_ND9pPgMoEBYOH1auviRvmJ8xVtg6El-u0irXg3hz4mJ0N_Nr3HMsruhfA",
            "token_type": "access_token",
            "expires_in": 3600
        }        
        try {
            // let res = await axios.post(constants.URLS.CREATE_AUTH_TOKEN, body, options)
            resolve(out)
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = {authorisationToken}