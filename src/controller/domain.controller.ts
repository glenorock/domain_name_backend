import db from '../config/db.config'
import { Request, Response } from 'express'

const Domain = db.domain
const Host = db.host
const Contact = db.contact
const Address = db.address

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
        let data: any = await Domain.create({
            name: domain.name,
            goal: domain.goal,
            password: domain.password,
        })
        data.setDataValue("registrantId", domain.registrant)
        data.setDataValue("adminId", domain.admin)
        data.setDataValue("techId", domain.tech)
        data.setDataValue("billId", domain.bill)
        data = await data.save()
        let ns: any[] = req.body.ns
        for (let n of ns) {
            let host: any = await Host.create({ name: n.name })
            let addrs: any[] = n.addrs
            for (let a of addrs) {
                let tmp = await Address.create(a)
                await host.addAddress(tmp)
            }
            await data.addHost(host)
        }
        const result = await Domain.findOne({
            where: {
                id: data.getDataValue('id')
            },
            include: {
                all: true,
                nested: true,
            }
        })
        return res.json(result)
    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}

export async function getAllDomains(req: Request, res: Response) {
    try {
        const data = await Domain.findAll(
            {
                include: {
                    all: true,
                    nested: true,
                }
            }
        );
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
            include: {
                all: true,
                nested: true,
            }
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