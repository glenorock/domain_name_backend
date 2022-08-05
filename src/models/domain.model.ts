import {  DataTypes, Sequelize } from 'sequelize';

export default function Domain(sequelize:Sequelize){
    const model = sequelize.define("domain",{
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        goal: {
            type: DataTypes.TEXT
        }
    });
    return model
}