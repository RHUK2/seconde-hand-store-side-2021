import './dotenv';
import path from 'path';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
import globalRouter from './routers/globalRouter';
import { localMiddleware } from './middleware';
import userRouter from './routers/userRouter';
import boardRouter from './routers/boardRouter';

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(
  helmet({
    contentSecurityPolicy: false
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.board, boardRouter);

export default app;
