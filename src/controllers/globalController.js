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
  if (password !== passwordCheck) {
    req.flash('error', '비밀번호가 다릅니다.');
    res.redirect(routes.join);
    res.status(400);
    return -1;
  }
  try {
    const user = await User.findOne({ nickname });
    if (user) {
      req.flash('error', '중복된 별명입니다.');
      res.redirect(routes.join);
      res.status(400);
      return -1;
    }
    const newUser = new User({
      email,
      nickname
    });
    await User.register(newUser, password);
    next();
  } catch (error) {
    req.flash('error', '이미 가입된 이메일입니다.');
    console.log(error);
    res.redirect(routes.join);
    res.status(400);
  }
};

export const getLogin = (req, res) => {
  res.render('login', { pageTitle: '로그인' });
};
export const postLogin = passport.authenticate('local', {
  successRedirect: routes.home,
  failureRedirect: routes.login,
  successFlash: '로그인 성공!',
  failureFlash: '로그인 실패.'
});
export const getLogout = (req, res) => {
  req.logout();
  req.flash('success', '로그아웃 성공!');
  res.redirect(routes.home);
};

export const naverLogin = passport.authenticate('naver', {
  successFlash: '로그인 성공!',
  failureFlash: '로그인 실패.'
});
export const naverLoginCallback = async (_, __, profile, done) => {
  console.log(profile);
  const {
    _json: { id, email, nickname }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.naverId = id;
      await user.save();
      return done(null, user);
    }
    const newUser = await User.create({
      email,
      nickname
    });
    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
};

export const kakaoLogin = passport.authenticate('kakao', {
  successFlash: '로그인 성공!',
  failureFlash: '로그인 실패.'
});
export const kakaoLoginCallback = async (_, __, profile, done) => {
  const {
    _json: {
      id,
      properties: { nickname },
      kakao_account: { email }
    }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.kakaoId = id;
      await user.save();
      return done(null, user);
    }
    const newUser = await User.create({
      email,
      nickname
    });
    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
};
export const googleLogin = passport.authenticate('google', {
  scope: ['email', 'profile'],
  successFlash: '로그인 성공!',
  failureFlash: '로그인 실패.'
});
export const googleLoginCallback = async (_, __, profile, done) => {
  const { id, email, displayName: nickname } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.googleId = id;
      await user.save();
      return done(null, user);
    }
    const newUser = await User.create({
      email,
      nickname
    });
    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
};
