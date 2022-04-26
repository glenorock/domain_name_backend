/**
 * 
 * @module Exception
 */


/**
 * 
 * @returns an exception indicating the operator inteserted is unknown
 */
const UnknownOperatorException = () => {
    const error = Error("The mobile operator is not recongnised by the system")
    return error
}

const InputFormatException = (reason:string) => {
    const error = Error(`Input is not valid: ${reason}`)
    return error
}

export {
    UnknownOperatorException,
    InputFormatException
}