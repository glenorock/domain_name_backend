import db from '../config/db.config'
import { Request, Response } from 'express'

const Host = db.host

export async function createHost(req: Request, res: Response) {
    try {
        const data = await Host.create(req.body)
        return res.json(data)
    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}

export async function getAllHosts(req: Request, res: Response) {
    try {
        const data = await Host.findAll()
        const count = await Host.count()
        return res.json({ count, data })
    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}

export async function getHost(req: Request, res: Response) {
    try {
        const { id } = req.params
        const data = await Host.findOne({
            where: {
                id: id
            }
        })
        return res.json(data)
    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}

export async function updateHost(req: Request, res: Response) {
    try {
        const { id } = req.params
        await Host.update(req.body, {
            where: {
                id: id
            }
        })
        const data = await Host.findOne({
            where: {
                id: id
            }
        })
        return res.json(data)
    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}