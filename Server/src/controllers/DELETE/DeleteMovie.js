import fs from 'fs';
import path from 'path';
import mysql from 'mysql2';
import { host, port, username, password } from '../config/config.js';

export const DeleteMovie = (req, res) => {
  var conexion = mysql.createConnection({
    host: host,
    port: port,
    user: username,
    password: password,
    multipleStatements: true,
  });

  const { idPelicula } = req.params;

  conexion.connect(function (err) {
    if (err) {
      console.error('Error de conexion: ' + err.stack);
      return;
    }
    console.log('Verificando y Conectando con el identificador ' + conexion.threadId);
    console.log('Evaluando Existencia de la Base de Datos');
    console.log('Contectado con Exito');
  });

  //Eliminar Imagen
  let query = 'SELECT * from `peliculasbd`.`peliculas` where `idPelicula` = ' + `${idPelicula}`;

  let query2 = 'DELETE from `peliculasbd`.`peliculas` where `idPelicula` = ' + `${idPelicula}`;

  conexion.query(query, (err, results) => {
    if (err) {
      console.log(err);
      conexion.end();
      return false;
    } else {
      console.log(results);
      try {
        fs.unlinkSync(path.join(`../Frontend/YourView/src/Images/${results[0].Imagen}`));
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
      res.send(false);
      return false;
    } else {
      console.log(results);
      conexion.end();
      res.send(true);
      return true;
    }
  });
};
