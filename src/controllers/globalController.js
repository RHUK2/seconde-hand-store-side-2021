import passport from 'passport';
import routes from '../routes';
import User from '../models/User';

export const getHome = (req, res) => {
  res.render('home', { pageTitle: '홈' });
};

export const getJoin = (req, res) => {
  res.render('join', { pageTitle: '회원가입' });
};
export const postJoin = async (req, res, next) => {
  const {
    body: { email, nickname, password, passwordCheck }
  } = req;
  console.log(email, nickname);
  if (password !== passwordCheck) {
    res.redirect(routes.join);
    res.status(400);
    return -1;
  }
  try {
    const newUser = new User({
      email,
      nickname
    });
    await User.register(newUser, password);
    next();
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
    res.status(400);
  }
};

export const getLogin = (req, res) => {
  res.render('login', { pageTitle: '로그인' });
};
export const postLogin = passport.authenticate('local', {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const getLogout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};
