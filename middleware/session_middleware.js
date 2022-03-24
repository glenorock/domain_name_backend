var config = require("config")
const conf = {
    secret: config.get("session.secret"),
    resave: config.get("session.resave"),
    saveUninitialized: config.get("session.saveUninitialized"),
    cookie: { 
        secure: config.get("session.cookie.secure")
    }
}

const getConfig = () =>{
    return conf
}

module.exports = {
    getConfig
}