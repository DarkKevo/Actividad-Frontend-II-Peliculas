import Express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { routes } from './routes/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Swagger API
import SwaggerUI from 'swagger-ui-express';
import SwaggerJsDoc from 'swagger-jsdoc';

const swagerSpect = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Api-Peliculas',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: [`${path.join(__dirname, './routes/routes.js')}`],
};

//Deployment
import './controllers/Deploy/Deploy.js';

const app = Express();

//Many Config
let port = 3000;

//Use APP
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);
app.use('/Documentation', SwaggerUI.serve, SwaggerUI.setup(SwaggerJsDoc(swagerSpect)));

//APP set
app.set('port', process.env.PORT || port);

app.listen(app.get('port'), () => {
  console.log(`[Running] - PORT: ${port}`);
});
