import express from 'express';

//Controller import
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

//Routes Import
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//Route to get svg icons
routes.get ('/items', itemsController.index);

//Route to create colect points
routes.post('/points', pointsController.create);

//Route to show only one colect point
routes.get ('/points/:id', pointsController.show);

export default routes;