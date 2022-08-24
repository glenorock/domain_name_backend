import {  DataTypes, Sequelize } from 'sequelize';

export default function Domain(sequelize:Sequelize){
    const model = sequelize.define("Domain",{
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        goal: {
            type: DataTypes.TEXT
        },
        password: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    });
    return model
}