import { Sequelize } from 'sequelize';
import Contact from '../models/contact.model';
import Domain from '../models/domain.model';
import Host from '../models/host.model';
import Transaction from '../models/transaction.model';
import config from 'config';

const conf = {
    HOST: config.get("db.DB_HOST") || "",
    PORT: config.get("db.DB_PORT") || "",
    USER: config.get("db.DB_USER") || "",
    PASSWORD: config.get("db.DB_PASSWORD") || "",
    DB: config.get("db.DB") || "",
};

const sequelize = new Sequelize(`mysql://${conf.USER}:${conf.PASSWORD}@${conf.HOST}:${conf.PORT}/${conf.DB}`);
const db = {
    Sequelize: Sequelize,
    contact: Contact(sequelize),
    domain: Domain(sequelize),
    host: Host(sequelize),
    transaction: Transaction(sequelize),
    sequelize: sequelize,
}

db.transaction.belongsTo(db.domain,{
    foreignKey: "domainId"
})

db.domain.belongsToMany(db.host,{through: "DomainHost"})
db.host.belongsToMany(db.domain,{through: "DomainHost"})

db.domain.belongsTo(db.contact,{
    foreignKey: "registrantId"
})

db.domain.belongsTo(db.contact,{
    foreignKey: "adminId"
})

db.domain.belongsTo(db.contact,{
    foreignKey: "techId"
})

db.domain.belongsTo(db.contact,{
    foreignKey: "billId"
})

export default db;