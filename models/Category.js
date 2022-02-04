const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

//Definicion de los campos que contendra la categoria.
const Category = sequelize.define('category',{
    id:{
        type:Sequelize.INTEGER,
        autoincrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },  
},{ tableName: 'category',timestamps: false});

module.exports = Category;