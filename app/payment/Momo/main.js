const api = require('./API/app')
const constants = require('./API/constants')
const json = require('../../utils/json')

const createSandboxUser = () => {
  let user = {}
  return new Promise((resolve, reject) => {
    api.getReferenceId(constants.URLS.GENERATE_UUID).then((value) => {
      user.reference_id = value
      api.createUser(constants.URLS.CREATE_USER, value).then(() => {
        api.getUser(user.reference_id).then((value) => {
          user.provider_callback_host = value.providerCallbackHost
          user.target_environment = value.targetEnvironment
          api.createAPIKey(user.reference_id).then((value) => {
            user.api_key = value
            json.saveToFile(user,"./app/payment/Momo/API/user.json").then(() =>{
              resolve(user)
            }).catch((err) =>{
              reject(err)
            })
          }).catch(
            (err) => reject(err)
          )
        }).catch((err) => {
          reject(err)
        })
      }).catch((err) => {
        reject(err)
      })
    }).catch((err) => {
      reject(err)
    })
  })
}

const generateAutorisationToken = () =>{
  return new Promise((resolve,reject) =>{
    let token = {}
    api.generateAuthentificationToken().then((value) =>{
      token = value
      json.saveToFile(token,'./app/payment/Momo/API/token.json').then(() =>{
        resolve(token)
      }).catch(err => reject(err))
    }).catch((err) => reject(err))
  })
}

const pay = (number, amount, user) => {
  
}

module.exports = {
  createSandboxUser,
  pay,
  generateAutorisationToken
}