import express from 'express';
import {
  getBoardArea,
  getBoardDelete,
  getBoardDetail,
  getBoardEdit,
  getBoardUpload,
  postBoardEdit,
  postBoardUpload
} from '../controllers/boardController';
import { onlyPrivate, uploadPhoto } from '../middleware';
import routes from '../routes';

const boardRouter = express.Router();

boardRouter.get(routes.boardUpload, onlyPrivate, getBoardUpload);
boardRouter.post(routes.boardUpload, uploadPhoto, postBoardUpload);

boardRouter.get(routes.boardDetail(), getBoardDetail);

boardRouter.get(routes.boardEdit(), onlyPrivate, getBoardEdit);
boardRouter.post(routes.boardEdit(), uploadPhoto, postBoardEdit);

boardRouter.get(routes.boardDelete(), onlyPrivate, getBoardDelete);

boardRouter.get(routes.boardArea(), getBoardArea);

export default boardRouter;
