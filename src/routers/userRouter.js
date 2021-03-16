import express from 'express';
import {
  getUserDelete,
  getUserEdit,
  getUserProfile
} from '../controllers/userController';
import routes from '../routes';

const userRouter = express.Router();

userRouter.get(routes.userProfile, getUserProfile);
userRouter.get(routes.userEdit, getUserEdit);
userRouter.get(routes.userDelete, getUserDelete);

export default userRouter;
