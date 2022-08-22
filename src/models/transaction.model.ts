import {  DataTypes, Sequelize } from 'sequelize';

export default function Transaction(sequelize:Sequelize){
    const model = sequelize.define("transaction",{
        motif: {
            type: DataTypes.STRING
        },
        period: {
            type: DataTypes.INTEGER
        }
    });
    return model
}