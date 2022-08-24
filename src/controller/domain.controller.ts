import db from '../config/db.config'
import { Request, Response } from 'express'

const Domain = db.domain
const Host = db.host
const Contact = db.contact

export async function createDomain(req: Request, res: Response) {
    try {
        let registrant = await Contact.findOne({
            where: {
                email: req.body.registrant?.email
            }
        })
        if (registrant === null) {
            registrant = await Contact.create(req.body.registrant)
        }

        let admin = await Contact.findOne({
            where: {
                email: req.body.admin?.email
            }
        })
        if (admin === null) {
            admin = await Contact.create(req.body.admin)
        }

        let tech = await Contact.findOne({
            where: {
                email: req.body.tech?.email
            }
        })
        if (tech === null) {
            tech = await Contact.create(req.body.tech)
        }

        let bill = await Contact.findOne({
            where: {
                email: req.body.bill?.email
            }
        })
        if (bill === null) {
            bill = await Contact.create(req.body.bill)
        }
        const domain: any = {
            ...req.body,
            registrant: registrant.getDataValue('id'),
            admin: admin.getDataValue('id'),
            tech: tech.getDataValue('id'),
            bill: bill.getDataValue('id')
        }
        let data = await Domain.create({
            name: domain.name,
            goal: domain.goal,
            password: domain.password,
        })
        data.setDataValue("registrantId", domain.registrant)
        data.setDataValue("adminId", domain.admin)
        data.setDataValue("techId", domain.tech)
        data.setDataValue("billId", domain.bill)
        data = await data.save()
        return res.json(data)
    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}

export async function getAllDomains(req: Request, res: Response) {
    try {
        const data = await Domain.findAll();
        const count = await Domain.count();
        return res.json({ count, data })
    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}

export async function getDomain(req: Request, res: Response) {
    try {
        const { id } = req.params
        const data = await Domain.findOne({
            where: {
                id
            },
            include: [
                {
                    model: Contact,
                    as:"registrant"
                },
                {
                    model: Contact,
                    as:'admin'
                },
                {
                    model: Contact,
                    as:"tech"
                },
                {
                    model: Contact,
                    as:"bill"
                }
            ]
        })
        return res.json(data)
    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}

export async function updateDomain(req: Request, res: Response) {
    try {
        const { id } = req.params
        const data = await Domain.update(req.body, {
            where: {
                id
            }
        })
        return res.json(data)
    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}