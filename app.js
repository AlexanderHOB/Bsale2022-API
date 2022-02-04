const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database'); // SQL ORM para MYSQL
const app = express();

//Configuración del body parser para aceptar JSON
app.use(bodyParser.json());


//Conexión con la base de datos
sequelize
    .sync()
    .then(result=>{
    app.listen(3000);
})



