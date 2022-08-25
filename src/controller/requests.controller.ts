import db from '../config/db.config'
import { Request, Response } from 'express'

const DomainRequest = db.request

export async function getAllRequest(req: Request, res: Response) {
    try {
        const {status} = req.query;
        let data,count;
        if ((status === undefined) || (status === 'ALL')){
            data = await DomainRequest.findAll({
                include: {
                    all: true,
                    nested: true
                },
                order: [
                    ["createdAt","DESC"]
                ]
            });
            count = await DomainRequest.count()
        }else{
            data = await DomainRequest.findAll({
                include: {
                    all: true,
                    nested: true
                },
                where: {
                    status:status
                },
                order: [
                    ["createdAt","DESC"]
                ]
            });
            count = DomainRequest.count({
                where: {
                    status:status
                }
            })
        }
        
        return res.json({count, data})
    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}

export async function getRequest(req:Request, res: Response) {
    try{
        const {id} = req.params;
        const data = await DomainRequest.findOne({
            where:{
                id:id
            },
            include: {
                all:true,
                nested: true
            }
        })
        return res.json(data)
    }catch(err:any){
        return res.status(500).json({message: err.message})
    }
}

export async function acceptRequest(req:Request, res: Response) {
    try{
        const {id} = req.params;
        await DomainRequest.update({
            status:"ACCEPTED"
        },{
            where:{
                id
            }
        })
        return await getRequest(req, res)
    }catch(err:any){
        return res.status(500).json({message: err.message})
    }
}

export async function rejectRequest(req:Request, res: Response) {
    try{
        const {id} = req.params;
        await DomainRequest.update({
            status:"REJECTED"
        },{
            where:{
                id
            }
        })
        return await getRequest(req, res)
    }catch(err:any){
        return res.status(500).json({message: err.message})
    }
}