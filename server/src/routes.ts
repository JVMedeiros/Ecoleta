import express from 'express';
import { request } from 'http';

const routes = express.Router();

routes.get ('/', (request, response) => {
    return response.json({message: 'Hello World'});
});

export default routes;