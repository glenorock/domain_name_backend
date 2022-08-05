import {  DataTypes, Sequelize } from 'sequelize';

export default function Ipaddress(sequelize:Sequelize){
    const model = sequelize.define("ipaddress",{
        address:{
            type: DataTypes.STRING
        },
        ver:{
            type: DataTypes.STRING,
        }
    });
    return model;
}