export const getUserProfile = (req, res) => {
  res.render('userProfile', { pageTitle: '프로필' });
};
export const getUserEdit = (req, res) => {
  res.render('userEdit', { pageTitle: '프로필 수정' });
};
export const getUserDelete = (req, res) => {
  res.render('home');
};
