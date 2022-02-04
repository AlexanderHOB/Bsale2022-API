const Sequelize = require('sequelize');

/**
 * @params {string} - Nombre de la base de datos
 * @params {string} - Usuario de la base de datos
 * @params {string} - Contraseña del usuario
 * @params {object} - Configuraciones de la base de datos
 */
console.log(process.env.USER);
const sequelize = new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
    dialect:'mysql',
    host:process.env.HOST
});

module.exports = sequelize;
