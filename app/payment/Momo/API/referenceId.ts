const uuid = require('uuid')

const generateReferenceId = () => {
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