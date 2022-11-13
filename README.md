# app-peliculas-ejercicio
Ejercicio técnico backend, aplicación alquiler de películas. 

### Datos generales

**- Autor del proyecto:** Alejandro López Bellés
**- Título del proyecto:** Ejercicio técnico 3 - Back Películas, alquiler
**- Fecha:** 06/11/2022

- Tecnologías y dependencias: 
 - JAVASCRIPT
 - NODE
 - NODEMON
 - SQL
 - SEQUELIZE
 - EXPRESS JS
 - POSTMAN

### Descripción general del proyecto 

El siguiente ejercicio consiste en el diseño y desarrollo de un backend para un servicio de alquiler de películas. La base de datos para esta aplicación es relacional (SQL) y permite la relación entre las tablas. 


### Requisitos previos y funcionamiento 

El primer paso para poner en funcionamiento el proyecto es clonarlo en nuestro local, siempre con el NODE instalado. 

- [x] git clone 'url-del-repositorio'

El segundo paso es instalar las dependencias con el siguiente comando: 

- [x] npm install

Por último, arrancamos el servidor utilizando: 

- [x] npm run dev


### Creación Base de  Datos

Introducimos nuestros datos en el archivo /config/config.json (servidor SQL, user, password, database and host) Luego, ejecutamos lo siguiente:

Crear base de datos:

- [x] sequelize db:create

Crear tablas:

- [x] sequelize db:migrate

Crear registros:

- [x] sequelize db:seed:all


### Tablas y relaciones


![relaciones api alquileres alejandro](https://user-images.githubusercontent.com/113507322/201548439-c041e31d-3ac8-4bbb-98a9-588b4d46e127.png)

La base de datos consta de 6 tablas: SERIES, PELÍCULAS, ARTÍCULOS, ALQUILERES, ROLES y USUARIOS.


### Endpoints

PELÍCULAS
- GET /peliculas --> Mostrará el listado con todas las películas.
- GET /peliculas/id/:id --> Mostrará una película buscando por su Id.
- GET /peliculas/titulo/:titulo --> Mostrará una película buscando por su título.
- GET /peliculas/genero/:genero --> Mostrará una película buscando por su genero.
- GET /peliculas/toprated --> Mostrará las películas con mayor puntuación (una puntuación superior al 4 en una escala del 4 al 5).
- GET /peliculas/cine --> Mostrará las películas que estén actualmente disponibles en cines.

SERIES
- GET /series --> Mostrará el listado con todas las series.
- GET /series/id/:id --> Mostrará una serie buscando por su Id.
- GET /series/titulo/:titulo --> Mostrará una serie buscando por su título.
- GET /series/toprated --> Mostrará las series con mayor puntuación (una puntuación superior al 4 en una escala del 4 al 5).
- GET /series/proximoepisodio --> Mostrará las series que vayan a emitir un próximo episodio próximamente.

USUARIOS
ARTÍCULOS




### Estructura del proyecto




🔧 ***El proyecto sigue en desarrollo......¡Disculpad las molestias!***  🔧

