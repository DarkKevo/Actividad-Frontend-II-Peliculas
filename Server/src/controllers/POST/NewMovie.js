import mysql from 'mysql2';
import { host, port, username, password } from '../config/config.js';

export const NewMovie = (Genero, Titulo, Sinopsis, Imagen, Fecha_Publicacion, Actores_Principales, Directores, Franquicia) => {
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

  let query =
    'INSERT INTO `peliculasbd`.`peliculas` (`Genero`, `Titulo`, `Sinopsis`, `Imagen`, `Fecha_Publicacion`, `Actores_Principales`, `Directores`, `Franquicia`) VALUES ';

  query += `('${Genero}', '${Titulo}', '${Sinopsis}', '${Imagen}', '${Fecha_Publicacion}', '${Actores_Principales}', '${Directores}', '${Franquicia}');`;

  conexion.query(query, (err, results) => {
    if (err) {
      console.log(err);
      conexion.end();
      return false;
    } else {
      console.log(results);
      conexion.end();
      return true;
    }
  });
};
