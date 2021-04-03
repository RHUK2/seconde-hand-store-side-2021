import User from '../models/User';
import routes from '../routes';
import { s3 } from '../middleware';

export const getUserProfile = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findOne({ _id: id });
    res.render('userProfile', { pageTitle: '프로필', user });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
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
    res.redirect(routes.home);
  }
};
export const postUserEdit = async (req, res) => {
  const {
    body: { nickname },
    params: { id },
    file
  } = req;
  try {
    const user = await User.findOne({ nickname });
    if (user && user._id.toString() !== id) {
      req.flash('error', '중복된 닉네임입니다.');
      res.redirect(routes.userEdit(id));
      res.status(400);
      return -1;
    }
    if (file) {
      s3.deleteObject(
        {
          Bucket: 'shstore-side-project',
          Key: `avatars/${req.user.avatarKey}`
        },
        (err, data) => {
          if (err) console.log(err, err.stack);
          else console.log(data);
        }
      );
    }
    await User.findOneAndUpdate(
      { _id: id },
      {
        nickname,
        avatarUrl: file ? file.location : req.user.avatarUrl,
        avatarKey: file ? file.key : req.user.avatarKey
      }
    );

    res.redirect(routes.userProfile(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const getUserDelete = (req, res) => {
  res.render('home');
};
