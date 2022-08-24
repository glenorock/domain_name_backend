import {  DataTypes, Sequelize } from 'sequelize';

export default function Host(sequelize:Sequelize){
    const model = sequelize.define("Host",{
        name:{
            type: DataTypes.STRING,
            unique: true
        },
    });
    return model
}