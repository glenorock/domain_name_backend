import {  DataTypes, Sequelize } from 'sequelize';

export default function Contact(sequelize:Sequelize){
    const model = sequelize.define("contact",{
        name:{
            type: DataTypes.STRING
        },
        org:{
            type: DataTypes.STRING
        },
        addr:{
            type: DataTypes.STRING
        },
        city:{
            type: DataTypes.STRING
        },
        pc:{
            type: DataTypes.STRING
        },
        cc:{
            type: DataTypes.STRING
        },
        tel:{
            type: DataTypes.STRING
        },
        fax:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING,
            unique: true
        },

    });
    return model
}