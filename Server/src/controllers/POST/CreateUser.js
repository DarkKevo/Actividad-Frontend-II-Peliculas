import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import { host, port, username, password } from '../config/config.js';
import { SaltRounds } from '../../index.js';

export const CreateUser = (req, res) => {
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

  const { nombre, clave, icon } = req.body;

  var Encripted_password = bcrypt.hashSync(clave, parseInt(SaltRounds));

  let verify = 'SELECT * FROM peliculasbd.usuarios where `nombre`= ' + `'${nombre}'`;

  let query = 'INSERT INTO `peliculasbd`.`usuarios` (`nombre`, `clave`, `icon`) VALUES ';
  query += `('${nombre}', '${Encripted_password}', '${icon}');
  `;

  conexion.query(verify, (err, result) => {
    if (err) {
      console.log(err);
      conexion.end();
      res.send(false);
    } else {
      if (result.length == 0) {
        conexion.query(query, (err, results) => {
          if (err) {
            console.log(err);
            conexion.end();
            res.send(false);
          } else {
            console.log(results);
            conexion.end();
            res.send(true);
          }
        });
      } else {
        conexion.end();
        res.send(false);
      }
    }
  });
};
