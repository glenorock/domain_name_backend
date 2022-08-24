import db from '../config/db.config'
import { Request, Response } from 'express'

const Contact = db.contact
export async function getAllContacts(req: Request, res: Response) {
    try {
        const data = await Contact.findAll();
        const count = await Contact.count();
        return res.json({ count, data })
    } catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export async function getContact(req: Request, res: Response) {
    try{
        const {id} = req.params
        const data = await Contact.findOne({
            where: {
                id: id
            }
        })
        return res.json(data)
    } catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export async function createContact(req: Request, res: Response) {
    try{
        const data = await Contact.create(req.body)
        return res.json(data)
    } catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export async function bulkCreateContacts(req:Request, res: Response) {
    try{
        const contacts:any[] = req.body.contacts
        const data = await Contact.bulkCreate(contacts);
        return res.json(data)
    }catch(err:any){
        return res.status(500).json({message: err.message})
    }
}

export async function updateContact(req: Request, res:Response){
    try{
        const {id} = req.params
        await Contact.update(req.body,{
            where: {
                id: id
            }
        })
        const data = await Contact.findOne({
            where: {
                id: id
            }
        })
        return res.json(data)
    }catch (err:any) {
        return res.status(500).json({message: err.message})
    }
}