const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database'); // SQL ORM para MYSQL
//Rutas
const productRoutes = require('./routers/product');
const categoryRoutes = require('./routers/category');


const app = express();

//Configuración del body parser para aceptar JSON
app.use(bodyParser.json());
//rutas
app.use('/apiv1',productRoutes);
app.use('/apiv1',categoryRoutes);


app.get('*', (req, res,next) => {
    res.status(404).json({
        message: 'Página no encontrada'
    });
});
// middleware que captura los errores
app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message;
    const data = err.data;
    res.status(status).json({
        message,
        data
    });
})

// Conexión con la base de datos
sequelize
    .sync()
    .then(result=>{
        app.listen(3000);
    }
)
// const connect = async()=>{
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//         app.listen(3000);
    
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// connect();
// app.listen(3000);



