const uuid = require('uuid')

const generateReferenceId = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(uuid.v4())
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  generateReferenceId
}