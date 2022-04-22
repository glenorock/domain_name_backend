import Express from 'express'
import Controller from './app/controller/controller'

const whois = (req:Express.Request,res:Express.Response) =>{
    try{
        let names = req.body.names
    Controller.whois(names).then((out) =>{
        res.status(200).send(out)
    }).catch((err) =>{
        res.status(400).send(err)
    })
    }catch(err){
        res.status(400).send(err)
    }
}

export default {
    whois
}