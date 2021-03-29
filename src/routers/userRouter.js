import express from 'express';
import {
  getUserDelete,
  getUserEdit,
  getUserProfile,
  postUserEdit
} from '../controllers/userController';
import { uploadAvatar } from '../middleware';
import routes from '../routes';

const userRouter = express.Router();

userRouter.get(routes.userProfile(), getUserProfile);
userRouter.get(routes.userEdit(), getUserEdit);
userRouter.post(routes.userEdit(), uploadAvatar, postUserEdit);
userRouter.get(routes.userDelete(), getUserDelete);

export default userRouter;
