import fs from 'fs';
import path from 'path';
import mysql from 'mysql2';
import { host, port, username, password } from '../config/config.js';

export const EditMovie = (
  Genero,
  Titulo,
  Sinopsis,
  imagen_name,
  Fecha_Publicacion,
  Actores_Principales,
  Directores,
  Franquicia,
  idPelicula,
  URL_pelicula
) => {
  var conexion = mysql.createConnection({
    host: host,
    port: port,
    user: username,
    password: password,
    multipleStatements: true,
  });

  conexion.connect(function (err) {
    if (err) {
      console.error('Error de conexion: ' + err.stack);
      return;
    }
    console.log('Verificando y Conectando con el identificador ' + conexion.threadId);
    console.log('Evaluando Existencia de la Base de Datos');
    console.log('Contectado con Exito');
  });

  //Eliminar Imagen Antigua
  let query = 'SELECT * from `peliculasbd`.`peliculas` where `idPelicula` = ' + `${idPelicula}`;

  let query2 =
    'UPDATE `peliculasbd`.`peliculas` set `Genero`= ' +
    `'${Genero}'` +
    ', `Titulo`= ' +
    `'${Titulo}'` +
    ', `Sinopsis`= ' +
    `'${Sinopsis}'` +
    ', `Imagen`= ' +
    `'${imagen_name}'` +
    ', `Fecha_Publicacion`= ' +
    `'${Fecha_Publicacion}'` +
    ', `Actores_Principales`= ' +
    `'${Actores_Principales}'` +
    ', `Directores`= ' +
    `'${Directores}'` +
    ', `Franquicia`= ' +
    `'${Franquicia}'` +
    ', `URL_pelicula`= ' +
    `'${URL_pelicula}'` +
    ' where `idPelicula` =' +
    `'${idPelicula}'`;

  conexion.query(query, (err, results) => {
    if (err) {
      console.log(err);
      conexion.end();
      return false;
    } else {
      console.log(results);
      try {
        fs.unlinkSync(path.join(`./src/Images/${results[0].Imagen}`));
        console.log('Archivo Eliminado');
        conexion.end();
        return true;
      } catch (err) {
        console.error('Algo Salio Mal', err);
        conexion.end();
        return false;
      }
    }
  });

  conexion.query(query2, (err, results) => {
    if (err) {
      console.log(err);
      conexion.end();
      return false;
    } else {
      console.log(results);
      return true;
    }
    conexion.end();
  });
};
