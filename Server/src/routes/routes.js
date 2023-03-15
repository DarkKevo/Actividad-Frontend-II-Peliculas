import Express from 'express';
import { GetMovies } from '../controllers/GET/GetMovies.js';
import { upload2, uploadFile } from '../controllers/POST/SetImage.js';
import { upload3, uploadFile2 } from '../controllers/PUT/SetEditMovie.js';
import { DeleteMovie } from '../controllers/DELETE/DeleteMovie.js';
import { GetUsers } from '../controllers/GET/GetUsers.js';
import { CreateUser } from '../controllers/POST/CreateUser.js';
import { LoginUser } from '../controllers/POST/LoginUser.js';
import { CreateAdmin } from '../controllers/POST/CreateAdmin.js';
import { LoginAdmin } from '../controllers/POST/LoginAdmin.js';
import { NewComentary } from '../controllers/PUT/NewComentary.js';
import { VerifyToken } from '../controllers/Security/VerifyToken.js';

export const routes = Express.Router();

//JWT
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

//Documentacion de Schema de Movies
/**
 * @swagger
 * components:
 *  schemas:
 *    Movies:
 *       type: object
 *       properties:
 *         idPelicula:
 *           type: number
 *         Genero:
 *           type: string
 *           description: Genero de la Pelicula
 *         Titulo:
 *           type: string
 *           description: Titulo de la Pelicula
 *         Sinopsis:
 *           type: number
 *           description: Contexto de la Pelicula
 *         Imagen:
 *           type: file
 *           description: Archivo Imagen de la Pelicula
 *         Fecha_Publicacion:
 *           type: date
 *           description: Fecha de Publicacion de la Pelicula
 *         Actores_Principales:
 *           type: string
 *           description: Actores Principales de la Pelicula
 *         Directores:
 *           type: string
 *           description: Directores de la Pelicula
 *         Franquicia:
 *           type: string
 *           description: Franquicia de la Pelicula
 *         Review:
 *           type: json
 *           description: Opiniones de la Pelicula
 *         URL_pelicula:
 *           type: string
 *           description: Url del Video de la Pelicula
 *       required:
 *         -Genero
 *         -Titulo
 *         -Sinopsis
 *         -Imagen
 *         -Fecha_Publicacion
 *         -Actores_Principales
 *         -Directores
 *         -Franquicia
 *         -URL_pelicula
 *       example:
 *         Genero: 1
 *         Titulo: El Titanic
 *         Sinopsis: LA historia del hundimiento de un barco
 *         Fecha_Publicacion: 2004/02/07
 *         Actores_Principales: Leonardo DiCaprio
 *         Directores: Antonio Banderas
 *         Franquicia: Disney
 *         Review: [{username: "John", icon: "www.img.com", comment: "A beautifull movie"}]
 *         URL_pelicula: www.my-example-movie.com
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Usuarios:
 *       type: object
 *       properties:
 *         idUsuarios:
 *           type: number
 *         nombre:
 *           type: string
 *           description: Nombre del Usuario
 *         clave:
 *           type: string
 *           description: Clave del Usuario
 *         icon:
 *           type: string
 *           description: Icono del Usuario
 *       required:
 *         -nombre
 *         -clave
 *       example:
 *         nombre: DarkKevo
 *         clave: my-secret-password-encrypted
 *         icon: www.my-logo-user.
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Administradores:
 *       type: object
 *       properties:
 *         idAdministradores:
 *           type: number
 *         nombre:
 *           type: string
 *           description: Nombre del Usuario
 *         clave:
 *           type: string
 *           description: Clave del Usuario
 *         icon:
 *           type: string
 *           description: Icono del Usuario
 *         developer_password:
 *           type: string
 *           description: Clave Especial de Creacion de Usuario
 *       required:
 *         -nombre
 *         -clave
 *         -developer_password
 *       example:
 *         nombre: DarkKevo
 *         clave: my-secret-password-encrypted
 *         icon: www.my-logo-user.
 *         developer_password: my-secret-developers-administrator
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Comentarios:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre del Usuario
 *         icon:
 *           type: string
 *           description: Icono del Usuario
 *         comentary:
 *           type: string
 *           description: Comentario
 *         idPelicula:
 *           type: number
 *           description: Id de la Pelicula
 *       required:
 *         -nombre
 *         -icon
 *         -comentary
 *       example:
 *         nombre: DarkKevo
 *         icon: www.my-logo-user.
 *         comentary: A Great Movie
 *         idPelicula: 1
 */

//Documentacion GetMovies
/**
 * @swagger
 * /GetMovies:
 *   get:
 *     summary: Retornar todas las peliculas
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: todas las Peliculas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movies'
 *
 */
routes.get('/GetMovies', GetMovies, (req, res) => {
  //Obtencion de Peliculas
});

//Documentacion NewMovie
/**
 * @swagger
 * /NewMovie:
 *   post:
 *     summary: Crea una nueva pelicula
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Movies'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success New Movie!
 */
routes.post('/NewMovie', VerifyToken, upload2, uploadFile, (req, res) => {
  //Creacion de Peliculas
});

//Documencacion de Edicion de Movie
/**
 * @swagger
 * /EditMovie:
 *   put:
 *     summary: Edita una Pelicula
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Movies'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success Edited Movie!
 */
routes.put('/EditMovie', VerifyToken, upload3, uploadFile2, (req, res) => {
  //Edicion de Peliculas
});

//Documentacion de Eliminacion de Peliculas
/**
 * @swagger
 * /DeleteMovie/{idPelicula}:
 *   delete:
 *     summary: Elimina una pelicula
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: idPelicula
 *         schema:
 *           type: string
 *         required: true
 *         description: Id de la Pelicula
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Deleted Movie!
 */
routes.delete('/DeleteMovie/:idPelicula', VerifyToken, DeleteMovie, (req, res) => {
  //Eliminacion de Peliculas
});

//Documentacion Obtener Usuarios
/**
 * @swagger
 * /GetUsers:
 *   get:
 *     summary: Retornar todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: todos los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuarios'
 *
 */
routes.get('/GetUsers', GetUsers, (req, res) => {
  //Obtener los Usuarios
});

//Documentacion Crear Usuarios
/**
 * @swagger
 * /CreateUser:
 *   post:
 *     summary: Crea un Nuevo Usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Usuarios'
 *     responses:
 *       200:
 *         description: Success New User!
 */
routes.post('/CreateUser', CreateUser, (req, res) => {
  //Crear Usuarios
});

//Documentacion Login Usuarios
/**
 * @swagger
 * /LoginUser:
 *   post:
 *     summary: Login Usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Usuarios'
 *     responses:
 *       200:
 *         description: Success Login User!
 */
routes.post('/LoginUser', LoginUser, (req, res) => {
  //Iniciar Sesion
});

//Documentacion Creacion de Administradores
/**
 * @swagger
 * /CreateAdmin:
 *   post:
 *     summary: Crear Administrador
 *     tags: [Admins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Administradores'
 *     responses:
 *       200:
 *         description: Success New Administrador!
 */
routes.post('/CreateAdmin', CreateAdmin, (req, res) => {
  //Creacion de Admin
});

//Documentacion Login de Administradores
/**
 * @swagger
 * /LoginAdmin:
 *   post:
 *     summary: Login Administrador
 *     tags: [Admins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Administradores'
 *     responses:
 *       200:
 *         description: Success Login Administrador!
 */
routes.post('/LoginAdmin', LoginAdmin, (req, res) => {
  //Login de Administradores
});

//Documentacion Comentarios o Review
/**
 * @swagger
 * /NewComentary:
 *   put:
 *     summary: Agrega un Comentario
 *     tags: [Review]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Comentarios'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success Add Comentary!
 */
routes.put('/NewComentary', VerifyToken, NewComentary, (req, res) => {
  //Comentarios
});
