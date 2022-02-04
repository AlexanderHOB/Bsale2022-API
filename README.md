# Bsale2022-API
API Rest Bsale 2022
Bienvenido a la documentación del API REST de BSALE 2022, la cual permite acceder a un conjunto de endpoints orientado a facilitar la integración, con sistemas externos. Por ejemplo, se puede obtener la lista de productos y sus respectivas categorías.
- El API permite llamadas del tipo [REST](https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional) y utiliza [JSON](https://www.json.org/json-en.html/) para el envío y recepción de la información.
- Se usan Sustantivos, no verbos en los endpoints
- Siempre se usa el nombre del recurso en forma plural y en inglés.
- Respuesta en una estructura JSON con los atributos en camelCase.
- Manejo de versiones en la URL.
- Paginación de la respuesta en JSON.

# Seguridad
No requiere de token de acceso para realizar las consultas. Dado que la API es desarrollado como parte de una prueba técnica

# Enviar un Request
Las peticiones son HTTP REST por lo que se debe especificar el método que se va a utilizar..

- GET, para obtener información de un recurso.

Un ejemplo de petición utilizando cURL seria:
```sh
    curl -X GET 
```
# Ejemplos

# Atributos
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
        products:{
            count:2,
            row:[
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
            ]
        }
    }
```