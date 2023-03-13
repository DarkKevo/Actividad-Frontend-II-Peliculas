import mysql from 'mysql2';
import { host, port, username, password } from '../config/config.js';
import fs from 'fs';

var text = fs.readFileSync('./src/controllers/Deploy/Deploy.sql', 'utf-8');

export var verify = mysql.createConnection({
  host: host,
  port: port,
  user: username,
  password: password,
  multipleStatements: true,
});

verify.connect(function (err) {
  if (err) {
    console.error('Error de conexion: ' + err.stack);
    return;
  }
  console.log('Verificando y Conectando con el identificador ' + verify.threadId);
  console.log("Evaluando Existencia de la Base de Datos")
  console.log('Contectado con Exito')
});

verify.query(`SHOW DATABASES LIKE 'PeliculasBD'`, (err, res) => {
  if (err) {
    console.log(err);
  }
  if (res.length == 0) {
    verify.query(text, function (err, res) {
      if (err) {
        console.log(err);
      }
      console.log('Base de Datos Creada, Verificada y Desplegada');
      verify.end();
    });
  }
});
