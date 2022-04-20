enum EventTypes {
    AccountCreation = "AccountCreation",
    DomainCreation = "DomainCreation",
    DomainUpdate =  "DomainUpdate",
}

type Event = {
    type:EventTypes,
    data:any
}

export {Event,EventTypes}