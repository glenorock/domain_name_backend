import db from '../config/db.config'
import { Request, Response } from 'express'

const Host = db.host

export async function createHost(req:Request, res:Response) {
    try{
        const data = Host.create(req.body)
        return res.json(data)
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function getAllHosts(req:Request, res:Response) {
    try{
        const data = Host.findAll()
        const count = Host.count()
        return res.json({data,count})
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function getHost(req:Request, res:Response) {
    try{
        const {id} = req.params
        const data = Host.findOne({
            where:{
                id
            }
        })
        return res.json(data)
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function updateHost(req:Request, res:Response) {
    try{
        const {id} = req.params
        const data = Host.update(req.body,{
            where: {
                id
            }
        })
        return res.json({data})
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}