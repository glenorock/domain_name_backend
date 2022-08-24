import express from "express"
import config from 'config'
import cookieParser from 'cookie-parser'
import cors from 'cors';

import PayMentRouter from './src/routes/pay.route';
import EppRouter from './src/routes/epp.route';
import ContactRouter from './src/routes/contact.route';
import DomainRouter from './src/routes/domain.route';
import HostRouter from'./src/routes/host.route';
import TransactionRouter from './src/routes/transaction.route';

import db from './src/config/db.config';

const app = express()
db.sequelize.sync()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(cookieParser());
app.use(cors())

app.use('/',PayMentRouter)
app.use('/', EppRouter)
app.use('/contact/',ContactRouter)
app.use('/domain/',DomainRouter)
app.use('/host/',HostRouter)
app.use('/transaction/',TransactionRouter)
app.listen(config.get("server.port"))