// Global Router
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
// User Router
const USER = '/user';
const USER_PROFILE = '/:id/profile';
const USER_EDIT = '/:id/edit';
const USER_DELETE = '/:id/delete';
// Board Router
const BOARD = '/board';
const BOARD_DETAIL = '/:id/detail';
const BOARD_EDIT = '/:id/edit';
const BOARD_DELETE = '/:id/delete';
// Routes Object
const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  user: USER,
  userProfile: USER_PROFILE,
  userEdit: USER_EDIT,
  userDelete: USER_DELETE,
  board: BOARD,
  boardDetail: BOARD_DETAIL,
  boardEdit: BOARD_EDIT,
  boardDelete: BOARD_DELETE
};

export default routes;
