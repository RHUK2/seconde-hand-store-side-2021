import Board from '../models/Board';
import routes from '../routes';

export const getBoardUpload = (req, res) => {
  res.render('boardUpload', { pageTitle: '업로드' });
};
export const postBoardUpload = async (req, res) => {
  const {
    body: { title, cost, description },
    files
  } = req;
  try {
    const newBoard = await Board.create({
      title,
      cost,
      description,
      creator: req.user._id
    });
    files.forEach(file => {
      newBoard.imageUrls.push(file.location);
    });
    await newBoard.save();
    res.redirect(routes.boardDetail(req.user._id));
  } catch (error) {
    console.log(error);
    res.redirect(`/board${routes.boardUpload}`);
    res.status(400);
  }
};
export const getBoardDetail = (req, res) => {
  res.render('boardDetail', { pageTitle: '포스트' });
};
export const getBoardEdit = (req, res) => {
  res.render('boardEdit', { pageTitle: '포스트 수정' });
};
export const getBoardDelete = (req, res) => {
  res.render('home');
};
