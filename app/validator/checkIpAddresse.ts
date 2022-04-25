import ping from 'ping'


const checkFormat = (ip: string) => {
    let regex = RegExp(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/)
    return regex.test(String(ip))
}

const isAlive = function (ip: string) {
    ping.promise.probe(ip).then((res: any) => {
        console.log(res)
        return res.alive
    }).catch((err: any) => {
        console.log(err)
        return err
    })
}

export {
    checkFormat,
    isAlive
}