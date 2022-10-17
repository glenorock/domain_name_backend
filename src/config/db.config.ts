import { Sequelize } from "sequelize";
import Contact from "../models/contact.model";
import Domain from "../models/domain.model";
import Host from "../models/host.model";
import Transaction from "../models/transaction.model";
import Address from "../models/address.model";
import Request from "../models/request.model";
import User from "../models/user.model";
import config from "config";

const conf = {
  HOST: config.get("db.DB_HOST") || "",
  PORT: config.get("db.DB_PORT") || "",
  USER: config.get("db.DB_USER") || "",
  PASSWORD: config.get("db.DB_PASSWORD") || "",
  DB: config.get("db.DB") || "",
};

const sequelize = new Sequelize(
  `mysql://${conf.USER}:${conf.PASSWORD}@${conf.HOST}:${conf.PORT}/${conf.DB}`
);
const db = {
  Sequelize,
  contact: Contact(sequelize),
  domain: Domain(sequelize),
  host: Host(sequelize),
  address: Address(sequelize),
  transaction: Transaction(sequelize),
  request: Request(sequelize),
  user: User(sequelize),
  sequelize,
};

db.transaction.belongsTo(db.domain);
db.request.belongsTo(db.domain);
db.user.belongsTo(db.domain);
db.domain.belongsToMany(db.host, { through: "Domain_Host" });
db.host.belongsToMany(db.domain, { through: "Domain_Host" });
db.host.belongsToMany(db.address, { through: "Host_Address" });
db.address.belongsToMany(db.host, { through: "Host_Address" });
db.domain.belongsTo(db.contact, {
  as: "registrant",
});
db.domain.belongsTo(db.contact, {
  as: "admin",
});
db.domain.belongsTo(db.contact, {
  as: "tech",
});
db.domain.belongsTo(db.contact, {
  as: "bill",
});

export default db;
