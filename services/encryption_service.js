const bcrypt = require("bcrypt")
const salt_rounds = 10

const hash = async (plainText) =>{
    return await bcrypt.hash(plainText,salt_rounds);
}

const compare  = async (plainText, hash) => {
    return await bcrypt.compare(plainText,hash);
}

module.exports = {
    hash,
    compare
}