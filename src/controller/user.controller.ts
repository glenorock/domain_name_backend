import db from '../config/db.config'
import { Request, Response } from 'express'

const User = db.user

export async function createUser(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function getAllUsers(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function getUser(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}

export async function updateUser(req:Request, res:Response) {
    try{
        
    }catch(err:any){
        return res.status(500).json({message:err.message})
    }
}