const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

//Definicion de los campos que contendra el producto.
const Product = sequelize.define('product',{
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
    url_image:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    price:{
        type:Sequelize.DECIMAL,
        allowNull:false,
    },
    discount:{
        type:Sequelize.DECIMAL,
        allowNull:false,
    },
    category:{
        type:Sequelize.INTEGER,
        allowNull:false,
    }
},{ tableName: 'product',timestamps: false});

module.exports = Product;