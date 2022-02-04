const express = require('express');
const router = express.Router();

//rutas de acceso 

//GET - apiv1/products
router.post('/products'); //Obtener todos los productos.

//GET - apiv1/products/1
router.get('/products/:productId') // Obtener un producto en específico


//POST apiv1/products

module.exports = router;