import passport from 'passport';
import routes from '../routes';
import User from '../models/User';
import Board from '../models/Board';
// Home
export const getHome = async (req, res) => {
  let boards = [];
  try {
    boards = await Board.find({}).sort({ _id: -1 });
  } catch (error) {
    console.log(error);
  } finally {
    res.render('home', { pageTitle: '홈', boards });
  }
};
// Search
export const getSearch = async (req, res) => {
  const {
    query: { term }
  } = req;
  let boards = [];
  try {
    boards = await Board.find({
      title: { $regex: term, $options: 'i' }
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.render('search', { pageTitle: '검색', term, boards });
  }
};
// Join
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
  }
  try {
    const emailUser = await User.findOne({ email });
    const nicknameUser = await User.findOne({ nickname });
    if (emailUser) {
      req.flash('error', '이미 가입된 이메일입니다.');
    }
    if (nicknameUser) {
      req.flash('error', '중복된 닉네임입니다.');
    }
    if (!emailUser && !nicknameUser) {
      const newUser = new User({
        email,
        nickname,
        avatarUrl:
          'https://shstore-side-project.s3.ap-northeast-2.amazonaws.com/assets/user.png'
      });
      await User.register(newUser, password);
    } else {
      res.redirect(routes.join);
      res.status(400);
    }
    next();
  } catch (error) {
    console.log(error);
    req.flash('error', '이미 가입된 이메일입니다.');
    res.redirect(routes.join);
    res.status(400);
  }
};
// Login
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
// Naver Login
export const naverLogin = passport.authenticate('naver', {
  successFlash: '로그인 성공!',
  failureFlash: '로그인 실패.'
});
export const naverLoginCallback = async (_, __, profile, done) => {
  const {
    _json: { id, email }
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
      nickname: `Box${new Date().getTime()}`,
      avatarUrl:
        'https://shstore-side-project.s3.ap-northeast-2.amazonaws.com/assets/user.png'
    });
    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
};
// Kakao Login
export const kakaoLogin = passport.authenticate('kakao', {
  successFlash: '로그인 성공!',
  failureFlash: '로그인 실패.'
});
export const kakaoLoginCallback = async (_, __, profile, done) => {
  const {
    _json: {
      id,
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
      nickname: `Box${new Date().getTime()}`,
      avatarUrl:
        'https://shstore-side-project.s3.ap-northeast-2.amazonaws.com/assets/user.png'
    });
    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
};
//  Google Login
export const googleLogin = passport.authenticate('google', {
  scope: ['email', 'profile'],
  successFlash: '로그인 성공!',
  failureFlash: '로그인 실패.'
});
export const googleLoginCallback = async (_, __, profile, done) => {
  const { id, email } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.googleId = id;
      await user.save();
      return done(null, user);
    }
    const newUser = await User.create({
      email,
      nickname: `Box${new Date().getTime()}`,
      avatarUrl:
        'https://shstore-side-project.s3.ap-northeast-2.amazonaws.com/assets/user.png'
    });
    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
};
