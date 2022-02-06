/**
 * funcion que retorna información de paginación
 * @param {object} data - objeto que contiene la información de la consulta realizada
 * @param {integer} page numero de pagina solicitada que
 * @param {integer} limit cantidad de elementos a mostrar
 * @returns 
 */
const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: elements } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, elements, totalPages, currentPage };
};
module.exports = getPagingData;