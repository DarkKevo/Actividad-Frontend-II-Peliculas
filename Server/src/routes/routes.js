import Express from 'express';
import { GetMovies } from '../controllers/GET/GetMovies.js';
import { upload2, uploadFile } from '../controllers/POST/SetImage.js';

export const routes = Express.Router();

//Documentacion de Schema de Movies
/**
 * @swagger
 * components:
 *  schemas:
 *    Movies:
 *       type: object
 *       properties:
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
 *       required:
 *         -Genero
 *         -Titulo
 *         -Sinopsis
 *         -Imagen
 *         -Fecha_Publicacion
 *         -Actores_Principales
 *         -Directores
 *         -Franquicia
 *       example:
 *         Genero: 1
 *         Titulo: El Titanic
 *         Sinopsis: LA historia del hundimiento de un barco
 *         Fecha_Publicacion: 2004/02/07
 *         Actores_Principales: Leonardo DiCaprio
 *         Directores: Antonio Banderas
 *         Franquicia: Disney
 *         Review: [{username: "John", icon: "www.img.com", comment: "A beautifull movie"}]
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
 *     responses:
 *       200:
 *         description: Success New Movie!
 */
routes.post('/NewMovie', upload2, uploadFile, (req, res) => {
  //Creacion de Peliculas
});
