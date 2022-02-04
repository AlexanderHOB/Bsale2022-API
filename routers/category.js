const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/Category');
//rutas de acceso 

//GET - apiv1/categories
router.get('/categories',categoryController.getAllCategories); //Obtener todas las categorias.

//GET - apiv1/categories/{1}
router.get('/categories/:categoryId',categoryController.getCategoryById) // Obtener una categoria en específico

//GET - apiv1/categories/{1}/products
router.get('/categories/:categoryId/products',categoryController.getProductByCategory) // Obtener productos en base a una categoria

//POST apiv1/categories

module.exports = router;