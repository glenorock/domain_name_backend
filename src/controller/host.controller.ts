import db from '../config/db.config'
import { Request, Response } from 'express'

const Host = db.host

export async function createHost(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function getAllHosts(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function getHost(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function updateHost(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}