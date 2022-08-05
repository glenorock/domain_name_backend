import {  DataTypes, Sequelize } from 'sequelize';

export default function User(sequelize:Sequelize){
    const model = sequelize.define("user",{
        domain: {
            type: DataTypes.STRING,
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