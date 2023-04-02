import mysql from 'mysql2';
import { host, port, username, password } from '../config/config.js';

export const SingleMovie = (req, res) => {
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

  let id = req.params.id;

  let query = 'SELECT * FROM peliculasbd.peliculas where `idPelicula` = ' + id;

  conexion.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.send(false);
    } else {
      console.log(results);
      res.send(results);
    }
  });
};
