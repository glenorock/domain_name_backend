const converter = require('xml-js')

const toJson = (xml) =>{
    return converter.xml2json(xml,{compact: true, spaces: 4})
}


module.exports = {
    toJson
}