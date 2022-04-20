module.exports = {
    getReferenceId : require('./referenceId').generateReferenceId,
    createUser : require('./user').createUser,
    getUser: require('./user').getUserInfo,
    createAPIKey: require('./user').createAPIKey,
    generateAuthentificationToken: require('./authorisationToken').authorisationToken,
    requestToPay: require('./requestToPay').requestToPay,
    getrequestToPayStatus: require('./requestToPay').getRequestToPayStatus,
    requestToPayDeliveryNotification: require('./requestToPay').requestToPayDeliveryNotification
}