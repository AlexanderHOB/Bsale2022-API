const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/Category');
//rutas de acceso 

//GET - apiv1/categories
router.get('/categories',categoryController.getAllCategories); //Obtener todas las categorias.

//GET - apiv1/categories/1
router.get('/categories/:categoryId',categoryController.getCategoryById) // Obtener una categoria en específico


//POST apiv1/categories

module.exports = router;