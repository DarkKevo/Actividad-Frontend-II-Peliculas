import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { NewMovie } from './NewMovie.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var imagen_name;

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../../../Frontend/YourView/src/Images'),
  filename: (req, file, cb) => {
    imagen_name = `${Date.now()}-${file.originalname}`;
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export const upload2 = upload.single('Imagen');

export const uploadFile = (req, res) => {
  const { Genero, Titulo, Sinopsis, Fecha_Publicacion, Actores_Principales, Directores, Franquicia, URL_pelicula } = req.body;
  NewMovie(Genero, Titulo, Sinopsis, imagen_name, Fecha_Publicacion, Actores_Principales, Directores, Franquicia, URL_pelicula);
  res.send(true);
};
