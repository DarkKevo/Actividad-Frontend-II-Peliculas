import mysql from 'mysql2';
import { host, port, username, password } from '../config/config.js';

export const NewComentary = (req, res) => {
  var conexion = mysql.createConnection({
    host: host,
    port: port,
    user: username,
    password: password,
    multipleStatements: true,
  });

  const { nombre, icon, comentary, idPelicula } = req.body;

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

  conexion.query(query, (err, results) => {
    if (err) {
      console.log(err);
      conexion.end();
      return false;
    } else {
      console.log(results);
      let jsondata = results[0].Review;
      jsondata.push({ nombre: nombre, icon: icon, comentary: comentary });

      let query2 = 'UPDATE `peliculasbd`.`peliculas` set `Review`= ' + `'${JSON.stringify(jsondata)}'` + ' where `idPelicula` =' + `'${idPelicula}'`;

      conexion.query(query2, (err, results) => {
        if (err) {
          console.log(err);
          conexion.end();
          res.send(false);
        } else {
          console.log(results);
          res.send(true);
        }
      });
    }
  });
};
