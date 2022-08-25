import {  DataTypes, Sequelize } from 'sequelize';

export default function Host(sequelize:Sequelize){
    const model = sequelize.define("Request",{
        status:{
            type: DataTypes.STRING,
        },
    });
    return model
}