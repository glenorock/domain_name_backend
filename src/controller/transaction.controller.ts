import db from '../config/db.config'
import { Request, Response } from 'express'

const Transaction = db.transaction

export async function createTransaction(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function getAllTransactions(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function getTransaction(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function updateTransaction(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}