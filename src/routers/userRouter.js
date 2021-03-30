import express from 'express';
import {
  getUserDelete,
  getUserEdit,
  getUserProfile,
  postUserEdit
} from '../controllers/userController';
import { onlyPrivate, uploadAvatar } from '../middleware';
import routes from '../routes';

const userRouter = express.Router();

userRouter.get(routes.userProfile(), getUserProfile);

userRouter.get(routes.userEdit(), onlyPrivate, getUserEdit);
userRouter.post(routes.userEdit(), uploadAvatar, postUserEdit);

userRouter.get(routes.userDelete(), onlyPrivate, getUserDelete);

export default userRouter;
