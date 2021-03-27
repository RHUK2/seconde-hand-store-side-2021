import express from 'express';
import {
  getHome,
  getJoin,
  getLogin,
  getLogout,
  googleLogin,
  kakaoLogin,
  naverLogin,
  postJoin,
  postLogin
} from '../controllers/globalController';
import routes from '../routes';

const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, getLogout);

globalRouter.get(routes.naver, naverLogin);
globalRouter.get(routes.naverCallback, naverLogin, (req, res) => {
  res.redirect(routes.home);
});
globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(routes.kakaoCallback, kakaoLogin, (req, res) => {
  res.redirect(routes.home);
});
globalRouter.get(routes.google, googleLogin);
globalRouter.get(routes.googleCallback, googleLogin, (req, res) => {
  res.redirect(routes.home);
});

export default globalRouter;
