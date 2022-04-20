enum EventTypes {
    AccountCreation,
    DomainCreation,
    DomainUpdate,
    ContactCreation
}

type Event = {
    type:EventTypes,
    data:any
}

export {Event,EventTypes}