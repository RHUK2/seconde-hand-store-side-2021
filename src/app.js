import './dotenv';
import path from 'path';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import NaverStrategy from 'passport-naver';
import cookieParser from 'cookie-parser';
import flash from 'express-flash';
import KakaoStrategy from 'passport-kakao';
import GoogleStrategy from 'passport-google-oauth2';
import routes from './routes';
import globalRouter from './routers/globalRouter';
import { localMiddleware } from './middleware';
import userRouter from './routers/userRouter';
import boardRouter from './routers/boardRouter';
import User from './models/User';
import {
  googleLoginCallback,
  kakaoLoginCallback,
  naverLoginCallback
} from './controllers/globalController';

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(
  helmet({
    contentSecurityPolicy: false
  })
);
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    name: 'session_id',
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL })
  })
);
app.use(flash());
app.use(morgan('dev'));

// Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.use(
  new NaverStrategy(
    {
      clientID: process.env.NAVER_ID,
      clientSecret: process.env.NAVER_SECRET,
      callbackURL: process.env.NAVER_CALLBACK_URL
    },
    naverLoginCallback
  )
);
passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_ID,
      clientSecret: '',
      callbackURL: process.env.KAKAO_CALLBACK_URL
    },
    kakaoLoginCallback
  )
);
passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_ID,
      clientSecret: '',
      callbackURL: process.env.KAKAO_CALLBACK_URL
    },
    kakaoLoginCallback
  )
);
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    googleLoginCallback
  )
);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.board, boardRouter);

export default app;
