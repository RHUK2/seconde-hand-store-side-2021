import './dotenv';
import path from 'path';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
import globalRouter from './routers/globalRouter';

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

app.use(routes.home, globalRouter);

export default app;
