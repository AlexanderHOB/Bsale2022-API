const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database'); // SQL ORM para MYSQL
const cors = require('cors');
//Rutas
const productRoutes = require('./routers/product');
const categoryRoutes = require('./routers/category');


const app = express();

//Configuración del body parser para aceptar JSON
app.use(bodyParser.json());
//cors
app.use(cors());
//rutas
app.use('/apiv1',productRoutes);
app.use('/apiv1',categoryRoutes);

//middleware de error en páginas no encontradas
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

const connect = async()=>{
    app.listen(process.env.PORT || 5000,async()=>{
        try {
            //Se emplea ORM sequelize para evitar ataques de SQLInjection, ya que transforma la data en objetos
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            
        } catch (error) {   
            console.error('Unable to connect to the database:', error);
            //reintentarse conectarse con la base de datos
            setTimeout(await sequelize.authenticate(), 5000);
        }
    })
}
connect();




