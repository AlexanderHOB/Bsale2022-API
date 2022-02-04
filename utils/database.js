const Sequelize = require('sequelize');

/**
 * @params {string} - Nombre de la base de datos
 * @params {string} - Usuario de la base de datos
 * @params {string} - Contraseña del usuario
 * @params {object} - Configuraciones de la base de datos
 */
const sequelize = new Sequelize('bsale_test','bsale_test','bsale_test',{
    dialect:'mysql',
    host:'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com'
});

module.exports = sequelize;
