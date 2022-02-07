# Bsale2022-API
API Rest Bsale 2022
Bienvenido a la documentación del API REST de BSALE 2022, la cual permite acceder a un conjunto de endpoints orientado a facilitar la integración, con sistemas externos. Por ejemplo, se puede obtener la lista de productos y sus respectivas categorías.
# Contenidos
* [Introducción](#introduccion)
* [Ejemplos de Consultas](#ejemplos)
    1. [Producto](#Productos)
    2. [Categoria](#categoria)
* [Explicación del Ejercicio](#Explicación-del-Ejercicio)

 

# Introduccion
- El API permite llamadas del tipo [REST](https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional) y utiliza [JSON](https://www.json.org/json-en.html/) para el envío y recepción de la información.
- Se usan Sustantivos, no verbos en los endpoints
- Siempre se usa el nombre del recurso en forma plural y en inglés.
- Respuesta en una estructura JSON con los atributos en camelCase.
- Manejo de versiones en la URL.
- Paginación de la respuesta en JSON.
- Empleo de ORM Sequelize.
- Evita ataques SQL Injection con ORM.



# Seguridad
No requiere de token de acceso para realizar las consultas. Dado que la API es desarrollado como parte de una prueba técnica

# Enviar un Request
Las peticiones son HTTP REST por lo que se debe especificar el método que se va a utilizar..

- GET, para obtener información de un recurso.

Un ejemplo de petición utilizando cURL seria:
```sh
    curl -X GET https://bsalebackend2022.herokuapp.com/apiv1/products
```
# Ejemplos
### Productos
Al realizar una petición para obtener todos los productos
```sh
GET apiv1/products
```
#### Parametros
- *perPage*, limita la cantidad de items de una respuesta JSON, por defecto el valor es 20
- *page*, permite paginar los items de una respuesta JSON, por defecto la es 1
- *orderBy*, ordena en base a un atributo,
- *name*, permite filtrar por nombre del atributo
#### Ejemplos
- `GET /apiv1/products?perPage=23`
- `GET /apiv1/products?page=2`
- `GET /apiv1/products?orderBy=asc`
- `GET /apiv1/products?name=bebidas`
#### Respuesta
```json
    {
        message: "Productos obtenidos correctamente!",    
        data:[
            {
                id:1,
                name: bebida,
                url_image:www,
                price:12,
                discount:1,
                category:1
            },
            {
                id:2,
                name: bebida,
                url_image:www,
                price:12,
                discount:1,
                category:1
            }
        ],
        totalItems:13,
        totalPages:10,
        currentPage:1
    }
```

### Producto filtrado por su PK
Al realizar una petición para obtener un producto.
```sh
GET apiv1/products/:productId
```
#### Parametros

#### Ejemplos
- `GET /apiv1/products/1`
- `GET /apiv1/products/2`
#### Respuesta
```json
    {
        message: "Productos obtenidos correctamente!",
        data:{
                id:1,
                name: bebida,
                url_image:www,
                price:12,
                discount:1,
                category:1
            },
        
    }
```
### Producto filtrado por su Categoria

Al realizar una petición para obtener todos los productos filtrados por su categoria
```sh
GET apiv1/categories/:categoryId/products
```
#### Parametros
- *perPage*, limita la cantidad de items de una respuesta JSON, por defecto el valor es 20
- *page*, permite paginar los items de una respuesta JSON, por defecto la es 1
- *orderBy*, ordena en base a un atributo.
#### Ejemplos
- `GET /apiv1/categories/1/products?perPage=23`
- `GET /apiv1/categories/2/products?page=2`
#### Respuesta
```json
    {
        message: "Productos obtenidos correctamente!",  
        data:[
            {
                id:1,
                name: bebida,
                url_image:www,
                price:12,
                discount:1,
                category:1
            },
            {
                id:2,
                name: bebida,
                url_image:www,
                price:12,
                discount:1,
                category:1
            }
        ],
        totalItems:13,
        totalPages:10,
        currentPage:1
    }
```

### Categoria

Al realizar una petición para obtener todas las categorias
```sh
GET apiv1/categories
```
#### Parametros
- *perPage*, limita la cantidad de items de una respuesta JSON, por defecto el valor es 20
- *page*, permite paginar los items de una respuesta JSON, por defecto la es 1
- *orderBy*, ordena en base a un atributo

#### Ejemplos
- `GET /apiv1/categories?perPage=23`
- `GET /apiv1/categories?orderBy=name`
#### Respuesta
```json
    {
        message: "Categorias obtenidas correctamente!",
        count:2,    
        data:[
            {
                id:1,
                name: bebidas,
               
            },
            {
                id:2,
                name: cervezas,
        
            }
        ]
    }
```

### Categoria filtrada por su PK
Al realizar una petición para obtener una categoria.
```sh
GET apiv1/categories/:categoryId
```
#### Parametros

#### Ejemplos
- `GET /apiv1/categories/1`
- `GET /apiv1/categories/2`
#### Respuesta
```json
    {
        message: "Categoria obtenida correctamente!",
        data:{
                id:1,
                name: bebidas,
            },
        
    }
```


## Explicación del Ejercicio
Desarrollo del API en Nodejs
### Estructura
Se utilizó la arquitectura MVC para el desarrollo del API del ejercicio, y se estructuro los archivos de la siguiente manera:
- Controllers
    -Category
    -Product
- models
    -Category
    -Product
- routers
    -Category
    -product
- utils
    -database
- middleware

#### Controladores
    - Category
        Contiene las siguientes funciones:
            1. getAllCategories - Encargado de ejecutar la consulta para extraer todas las categorias en base a los parámetros y retornar la respuesta en formato JSON.
            2. getCategoryById - Encargado de ejecutar la consulta para extraeruna categoría en específico filtrado por su identificador.
            3. getProductByCategory - Encargado de ejecutar la consulta que extrae todos los productos filtrado por su categoria.
    - Product
        Contiene las siguientes funciones:
            1. getAllProducts - Encargado de ejecutar la consulta para extraer todos los productos en base a los parámetros y retornar la respuesta en formato JSON.
            2. getProductById - Encargado de ejecutar la consulta para extraer un producto en específico filtrado por su identificador.
#### Models
    Utilizando *sequelize* se creo los modelos de las dos entidades, anunciando los atributos que contenian.
#### Routers
    Contiene las rutas y sus respectivos métodos HTTP.
#### utils
    Contiene la configuración para conectarse a la Base de Datos. Utiliza **Environment Variables**
