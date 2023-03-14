import mysql from 'mysql2';
import { host, port, username, password } from '../config/config.js';
import bcrypt from 'bcrypt';

export const LoginAdmin = (req, res) => {
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

  const { nombre, clave } = req.body;

  let query = 'SELECT * FROM peliculasbd.administradores where `nombre`= ' + `'${nombre}'`;

  conexion.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.send(false);
    } else {
      if (results == []) {
        return false;
      } else {
        bcrypt.compare(clave, results[0].clave).then(function (result) {
          console.log(result)
          if (result == true) {
            res.send(true);
          } else {
            res.send(false);
          }
        });
      }
    }
  });
};
