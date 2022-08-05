import { Sequelize } from 'sequelize';
import Contact from '../models/contact.model';
import Domain from '../models/domain.model';
import Host from '../models/host.model';
import Ipaddress from '../models/ipaddress.model';
import Transaction from '../models/transaction.model';
import User from '../models/user.model';

const config = {
    HOST: process.env.DB_HOST || "",
    PORT: process.env.DB_PORT || "",
    USER: process.env.DB_USER || "",
    PASSWORD: process.env.DB_PASSWORD || "",
    DB: process.env.DB || "",
};

const sequelize = new Sequelize(`mysql://${config.USER}:${config.PASSWORD}@${config.HOST}:${config.PORT}/${config.DB}`);
const db = {
    Sequelize: Sequelize,
    contact: Contact(sequelize),
    domain: Domain(sequelize),
    host: Host(sequelize),
    ipaddress: Ipaddress(sequelize),
    transaction: Transaction(sequelize),
    user: User(sequelize),
    sequelize: sequelize,
}

db.contact.hasMany(db.domain)


export default db;