import {  DataTypes, Sequelize } from 'sequelize';

export default function Domain(sequelize:Sequelize){
    const model = sequelize.define("domain",{
        name: {
            type: DataTypes.STRING
        },
        goal: {
            type: DataTypes.TEXT
        }
    });
    return model
}