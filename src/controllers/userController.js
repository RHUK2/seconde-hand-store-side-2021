import User from '../models/User';

export const getUserProfile = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findOne({ _id: id });
    res.render('userProfile', { pageTitle: '프로필', user });
  } catch (error) {
    console.log(error);
  }
};
export const getUserEdit = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findOne({ _id: id });
    res.render('userEdit', { pageTitle: '프로필 수정', user });
  } catch (error) {
    console.log(error);
  }
};
export const getUserDelete = (req, res) => {
  res.render('home');
};
