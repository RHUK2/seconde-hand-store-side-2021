export const getHome = (req, res) => {
  res.render('home', { pageTitle: '홈' });
};
export const getJoin = (req, res) => {
  res.render('join', { pageTitle: '회원가입' });
};
export const getLogin = (req, res) => {
  res.render('login', { pageTitle: '로그인' });
};
export const getLogout = (req, res) => {
  res.render('home');
};
