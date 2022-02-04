const Category = require("../models/Category")



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
            categories,
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
                category,
            });
        })
        .catch(err=>{
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        })

}