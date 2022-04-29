import * as api from './API/app'
import * as constants from './API/constants'
import * as Utils from '../../utils/index'
const json = Utils.JSON
import config from 'config'

const createSandboxUser = () => {
  let user:any = {}
  return new Promise((resolve, reject) => {
    api.getReferenceId().then((value:any) => {
      user.reference_id = value
      api.createUser(constants.URLS.CREATE_USER, value).then(() => {
        api.getUser(user.reference_id).then((value:any) => {
          user.provider_callback_host = value.providerCallbackHost
          user.target_environment = value.targetEnvironment
          api.createAPIKey(user.reference_id).then((value:any) => {
            user.api_key = value
            json.saveToFile(user, "./app/payment/Momo/API/user.json").then(() => {
              resolve(user)
            }).catch((err:any) => {
              reject(err)
            })
          }).catch(
            (err:any) => reject(err)
          )
        }).catch((err:any) => {
          reject(err)
        })
      }).catch((err:any) => {
        reject(err)
      })
    }).catch((err:any) => {
      reject(err)
    })
  })
}

const generateAutorisationToken = () => {
  return new Promise((resolve, reject) => {
    let token:any = {}
    api.generateAuthentificationToken().then((value:any) => {
      token.access_token = value.access_token
      token.token_type = value.token_type
      token.expires_in = value.expires_in
      json.saveToFile(token, './app/payment/Momo/API/token.json').then(() => {
        resolve(token)
      }).catch((err:any) => {reject(err)})
    }).catch((err:any) => reject(err))
  })
}

const requestToPay = (number: String) => {
  let out:any = {}
  let data:any = {
    amount: `${config.get("payment.cost")}`,
    currency: `EUR`,
    externalId: `${Date.now()}`,
    payer: {
      partyIdType: "MSISDN",
      partyId: `${number}`
    },
    payerMessage: `${config.get("payment.payer_message")}`,
    payeeNote: `${config.get("payment.payee_note")}`,
  }
  return new Promise((resolve,reject) =>{
    api.getReferenceId().then((id:String) =>{
      data.reference_id = id
      api.requestToPay(id,data).then(() =>{
        api.getrequestToPayStatus(id).then((res:any) =>{
          out.request_status = res
          api.requestToPayDeliveryNotification(id,"Message").then((res:any) =>{
            resolve(res)
          }).catch((err:any) => {reject(err)})
        }).catch((err:any) => {reject(err)})
      }).catch((err:any) => {reject(err)})
    }).catch((err:any) => {reject(err)})
  })
}

const pay = (number:String, amount:Number) => {
  return new Promise((resolve,reject) =>{
    resolve("Done")
  })
}

export {
  createSandboxUser,
  pay,
  generateAutorisationToken,
  requestToPay
}