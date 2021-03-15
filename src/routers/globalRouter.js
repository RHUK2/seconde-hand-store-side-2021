import express from 'express';
import { getHome } from '../controllers/globalController';
import routes from '../routes';

const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);

export default globalRouter;
