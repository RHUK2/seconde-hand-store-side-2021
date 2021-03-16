import express from 'express';
import {
  getBoardDelete,
  getBoardDetail,
  getBoardEdit
} from '../controllers/boardController';
import routes from '../routes';

const boardRouter = express.Router();

boardRouter.get(routes.boardDetail, getBoardDetail);
boardRouter.get(routes.boardEdit, getBoardEdit);
boardRouter.get(routes.boardDelete, getBoardDelete);

export default boardRouter;
