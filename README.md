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


![relaciones alex](https://user-images.githubusercontent.com/113507322/200190222-67681f6a-3e13-463b-882b-e1935af0d703.png)

La base de datos consta de 7 tablas: SERIES, PELÍCULAS, ARTÍCULOS, ALQUILERES, ROLES y USUARIOS, y una tabla intermedia que une ARTÍCULOS y ALQUILERES.


### Endpoints

PELÍCULAS
GET /peliculas --> Mostrará el listado con todas las películas.
GET /peliculas/id/:id --> Mostrará una película buscando por su Id.
GET /peliculas/titulo/:titulo --> Mostrará una película buscando por su título.
GET /peliculas/genero/:genero --> Mostrará una película buscando por su genero.



