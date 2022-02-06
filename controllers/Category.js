const Category = require("../models/Category");
const Product = require("../models/Product");
const getPagingData = require("../utils/paginate");



//Obtener todas las categorias
exports.getAllCategories = (req, res, next) => {
    const currentPage = req.query.page || 1; //Pagina solicitada
    const perPage = 10; // Cantidad de productos a mostrar
    const orderBy = req.query.orderBy || 'id'; // ordenar en base a un atributo
    //Consulta a travéz de sql sequelize
    Category.findAndCountAll({
        order: [orderBy],
        limit: perPage,
        offset: (currentPage-1) * perPage,
    })
    .then(categories=>{
        res.status(200).json({
            message:'Categorias obtenidas correctamente!',
            count:categories.count,
            data:[...categories.rows]
        });
    })
    .catch(err => {
        if(err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    });
}

//Obtener la categoria por su Id
exports.getCategoryById = (req,res,next)=>{
    const categoryId = req.params.categoryId; //obtener la id del producto de la URI
    Category.findByPk(categoryId)
        .then(category=>{
            if(!category){
                const error = new Error ('Categoria no encontrado');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message:'Categoria obtenida correctamente!',
                data:category,
            });
        })
        .catch(err=>{
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        })

}
//Obtener la categoria por su Id
exports.getProductByCategory = (req,res,next)=>{
    const categoryId = req.params.categoryId; //obtener la id del producto de la URI
    const currentPage = req.query.page || 1; //Pagina solicitada
    const perPage = req.query.perPage|| 4; // Cantidad de productos a mostrar
    Product.findAndCountAll({
        where:{
            category:categoryId
        },
        limit: perPage,
        offset: (currentPage-1) * perPage,
    })
    .then(products=>{
        if(!products){
            const error = new Error ('Productos no encontrados');
            error.statusCode = 404;
            throw error;
        }
        const {totalItems,totalPages} = getPagingData(products,currentPage,perPage);

        res.status(200).json({
            message:'Productos obtenidos correctamente!',
            count:products.count,
            data:[...products.rows],
            totalItems,
            totalPages,
            currentPage
        });
    })
    .catch(err=>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    })

}