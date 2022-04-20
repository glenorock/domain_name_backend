const converter = require('xml-js')

const toJson = (xml:string) =>{
    return converter.xml2json(xml,{compact: true, spaces: 4})
}

module.exports = {
    toJson
}