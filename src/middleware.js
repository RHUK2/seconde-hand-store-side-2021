// import aws from 'aws-sdk';
// import multer from 'multer';
// import multerS3 from 'multer-s3';
import routes from './routes';

// const s3 = new aws.S3({
//   accessKeyId: process.env.AWS_KEY,
//   secretAccessKey: process.env.AWS_PRIVATE_KEY,
//   region: 'ap-northeast-2'
// });

export const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.webTitle = '박스마켓';
  next();
};

export const temp = (req, res) => {
  res.send(3);
};
