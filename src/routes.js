// Global Router
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';

// User Router
const USER = '/user';
const USER_PROFILE = '/:id/profile';

const BOARD = '/board';

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  user: USER,
  userProfile: USER_PROFILE,
  board: BOARD
};

export default routes;
