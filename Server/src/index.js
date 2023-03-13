import Express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { routes } from './routes/routes.js'

//Deployment
import './controllers/Deploy/Deploy.js'

const app = Express();

//Many Config
let port = 3000;

//Use APP
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

//APP set
app.set('port', process.env.PORT || port);

app.listen(app.get('port'), () => {
    console.log(`[Running] - PORT: ${port}`);
})

