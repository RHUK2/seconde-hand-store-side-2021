import express from 'express';
import {
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

export default userRouter;
