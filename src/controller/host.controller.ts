import db from '../config/db.config'
import { Request, Response } from 'express'

const Host = db.host
const Address = db.address

export async function createHost(req: Request, res: Response) {
    try {
        const host: any = await Host.create({ name: req.body.name })
        let addrs = [...req.body.addrs]
        for (const a of addrs) {
            let tmp = await Address.create(a)
            await host.addAddress(tmp)
        }
        const data = await Host.findOne({
            where: {
                id: host.id
            },
            include: {
                model: Address,
                through: {
                    attributes: []
                }
            }
        })
        return res.json(data)
    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}

export async function getAllHosts(req: Request, res: Response) {
    try {
        const data = await Host.findAll({
            include: {
                model: Address,
                through: {
                    attributes: []
                }
            }
        })
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
                id
            },
            include: {
                model: Address,
                through: {
                    attributes: []
                }
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
                id
            }
        })
        const data = await Host.findOne({
            where: {
                id
            },
            include: {
                model: Address,
                through: {
                    attributes: []
                }
            }
        })
        return res.json(data)
    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}