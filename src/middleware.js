import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import routes from './routes';

export const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  region: 'ap-northeast-2'
});

const multerAvatar = multer({
  storage: multerS3({
    s3,
    acl: 'public-read',
    bucket: 'shstore-side-project/avatars'
  })
});

const multerPhoto = multer({
  storage: multerS3({
    s3,
    acl: 'public-read',
    bucket: 'shstore-side-project/photos'
  })
});

export const uploadAvatar = multerAvatar.single('avatar');
export const uploadPhoto = multerPhoto.array('photo', 4);

export const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.webTitle = '박스마켓';
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
