const UnknownOperatorException = () => {
    const error = Error("The mobile operator is not recongnised by the system")
    return error
}

UnknownOperatorException.prototype = Object.create(Error.prototype)

export { UnknownOperatorException }