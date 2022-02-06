const Product = require("../models/Product")
const { Op } = require("sequelize");
const getPagingData = require("../utils/paginate");

//Obtener todos los productos
exports.getAllProducts = async(req, res, next) => {
    const currentPage = req.query.page || 1; //Pagina solicitada
    const perPage = req.query.perPage|| 4; // Cantidad de productos a mostrar
    const orderBy = req.query.orderBy || 'id'; // ordenar en base a un atributo
    const name = req.query.name || null; //filtrar por nombre
    let products;
    try{
        if(name){
            products = await Product.findAndCountAll({
                        where:{name:{
                            [Op.substring]:name
                            }
                        },
                        order: [orderBy],
                        limit: perPage,
                        offset: (currentPage-1) * perPage,
                    });
        }else{
            products = await Product.findAndCountAll({
                order: [orderBy],
                limit: perPage,
                offset: (currentPage-1) * perPage,
            });
        }
        //obtener totalItems,TotalPages
        const {totalItems,totalPages} = getPagingData(products,currentPage,perPage);
        res.status(200).json({
            message:'Productos obtenidos correctamente!',
            data:[...products.rows],
            totalItems,
            totalPages,
            currentPage
        });
    }catch(err){
        if(err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
    
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
                data:product,
            });
        })
        .catch(err=>{
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        })

}