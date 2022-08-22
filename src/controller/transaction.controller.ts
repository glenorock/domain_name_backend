import db from '../config/db.config'
import { Request, Response } from 'express'
import { where } from 'sequelize/types'

const Transaction = db.transaction

export async function createTransaction(req:Request, res:Response) {
    try{
        const data = Transaction.create(req.body)
        return res.json(data)
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function getAllTransactions(req:Request, res:Response) {
    try{
        const data = Transaction.findAll()
        const count = Transaction.count()
        return res.json({data,count})
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function getTransaction(req:Request, res:Response) {
    try{
        const {id} = req.params
        const data = Transaction.findOne({
            where:{
                id
            }
        })
        return res.json(data)
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function updateTransaction(req:Request, res:Response) {
    try{
        const {id} = req.params
        const data = Transaction.update(req.body,{
            where: {
                id
            }
        })
        return res.json(data)
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}