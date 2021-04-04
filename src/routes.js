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
const BOARD_UPLOAD = '/upload';
const BOARD_DETAIL = '/:id/detail';
const BOARD_EDIT = '/:id/edit';
const BOARD_DELETE = '/:id/delete';
const BOARD_AREA = '/:area';
// Social Login Router
const NAVER = '/auth/naver';
const NAVER_CALLBACK = '/auth/naver/callback';
const KAKAO = '/auth/kakao';
const KAKAO_CALLBACK = '/auth/kakao/callback';
const GOOGLE = '/auth/google';
const GOOGLE_CALLBACK = '/auth/google/callback';
// API Router
const API = '/api';
const COORDS = '/:id/coords';
// Routes Object
const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  user: USER,
  userProfile: id => {
    if (id) return `/user/${id}/profile`;
    return USER_PROFILE;
  },
  userEdit: id => {
    if (id) return `/user/${id}/edit`;
    return USER_EDIT;
  },
  userDelete: id => {
    if (id) return `/user/${id}/delete`;
    return USER_DELETE;
  },
  board: BOARD,
  boardUpload: BOARD_UPLOAD,
  boardDetail: id => {
    if (id) return `/board/${id}/detail`;
    return BOARD_DETAIL;
  },
  boardEdit: id => {
    if (id) return `/board/${id}/edit`;
    return BOARD_EDIT;
  },
  boardDelete: id => {
    if (id) return `/board/${id}/delete`;
    return BOARD_DELETE;
  },
  boardArea: area => {
    if (area) return `/board/${area}`;
    return BOARD_AREA;
  },
  naver: NAVER,
  naverCallback: NAVER_CALLBACK,
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK,
  google: GOOGLE,
  googleCallback: GOOGLE_CALLBACK,
  api: API,
  coords: COORDS
};

export default routes;
