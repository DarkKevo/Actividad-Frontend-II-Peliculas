import Express from 'express';

export const routes = Express.Router();

routes.get('/', (req, res) => {
    res.send('Hello World')
})