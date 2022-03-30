const UnknownOperatorException = () => {
    const error = Error("The mobile operator is not recongnised by the system")
    error.code = "UNKNOWN_OPERATOR"
    return error
}

UnknownOperatorException.prototype = Object.create(Error.prototype)

module.exports = {UnknownOperatorException}