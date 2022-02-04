const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Configuración del body parser para aceptar JSON
app.use(bodyParser.json());


app.listen(3000);



