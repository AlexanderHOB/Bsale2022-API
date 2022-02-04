const express = require('express');
const router = express.Router();
const productController = require('../controllers/Product');
//rutas de acceso 

//GET - apiv1/products
router.get('/products',productController.getAllProducts); //Obtener todos los productos.

//GET - apiv1/products/1
router.get('/products/:productId',productController.getProductById) // Obtener un producto en específico


//POST apiv1/products

module.exports = router;