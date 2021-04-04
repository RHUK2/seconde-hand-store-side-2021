import express from 'express';
import { getCoords } from '../controllers/boardController';
import routes from '../routes';

const apiRouter = express.Router();

apiRouter.get(routes.coords, getCoords);

export default apiRouter;
