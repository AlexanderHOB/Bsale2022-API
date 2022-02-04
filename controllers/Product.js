const Product = require("../models/Product")



//Obtener todos los productos
exports.getAllProducts = (req, res, next) => {
    const currentPage = req.query.page || 1; //Pagina solicitada
    const perPage = 2; // Cantidad de productos a mostrar
    const orderBy = req.query.orderBy || 'id'; // ordenar en base a un atributo
    //Consulta a travéz de sql sequelize
    Product.findAndCountAll({
        order: [orderBy],
        limit: perPage,
        offset: (currentPage-1) * perPage,
    })
    .then(products=>{
        res.status(200).json({
            message:'Productos obtenidos correctamente!',
            products,
        });
    })
    .catch(err => {
        if(err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    });
}

//Obtener el producto por su Id
exports.getProductById = (req,res,next)=>{
    const productId = req.params.productId; //obtener la id del producto de la URI
    Product.findByPk(productId)
        .then(product=>{
            if(!product){
                const error = new Error ('Producto no encontrado');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message:'Producto obtenidos correctamente!',
                product,
            });
        })
        .catch(err=>{
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        })

}