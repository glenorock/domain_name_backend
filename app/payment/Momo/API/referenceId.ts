import * as uuid from 'uuid'

const generateReferenceId = () => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(uuid.v4())
    } catch (error) {
      reject(error)
    }
  })
}

export {
  generateReferenceId
}