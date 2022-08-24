import { Sequelize } from 'sequelize';
import Contact from '../models/contact.model';
import Domain from '../models/domain.model';
import Host from '../models/host.model';
import Transaction from '../models/transaction.model';
import Address from '../models/address.model';
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
    Sequelize,
    contact: Contact(sequelize),
    domain: Domain(sequelize),
    host: Host(sequelize),
    address: Address(sequelize),
    transaction: Transaction(sequelize),
    sequelize,
}

db.transaction.belongsTo(db.domain)

db.domain.belongsToMany(db.host,{through: "DomainHost"})
db.host.belongsToMany(db.domain,{through: "DomainHost"})

db.host.belongsToMany(db.address,{through: "HostAddress"})
db.address.belongsToMany(db.host,{through: "HostAddress"})



db.domain.belongsTo(db.contact,{
    as: "registrant"
})
db.domain.belongsTo(db.contact,{
    as: "admin"
})
db.domain.belongsTo(db.contact,{
    as: "tech"
})
db.domain.belongsTo(db.contact,{
    as: "bill"
})

export default db;