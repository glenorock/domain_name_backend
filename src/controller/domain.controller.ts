import db from '../config/db.config'
import { Request, Response } from 'express'

const Domain = db.domain
const Host = db.host
const Contact = db.contact

export async function createDomain(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function getAllDomains(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function getDomain(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function updateDomain(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}