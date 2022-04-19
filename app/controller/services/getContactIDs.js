const getContacts = (contacts) => {
    return new Promise((resolve, reject) => {
        let data = Array(contacts)
        let promisses = []
        data.forEach((contact) => {
            promisses.push(eppContact.getInfoByEmail(contact.email))
        })
        Promise.all(promisses).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}