import {  DataTypes, Sequelize } from 'sequelize';

export default function Address(sequelize:Sequelize){
    const model = sequelize.define("Address",{
        ip:{
            type: DataTypes.STRING
        },
        ver:{
            type: DataTypes.STRING,
        }
    });
    return model
}