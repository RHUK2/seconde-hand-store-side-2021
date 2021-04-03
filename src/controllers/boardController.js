import Board from '../models/Board';
import routes from '../routes';

export const getBoardUpload = (req, res) => {
  res.render('boardUpload', { pageTitle: '업로드' });
};
export const postBoardUpload = async (req, res) => {
  const {
    body: { title, cost, description, areas, address },
    files
  } = req;
  try {
    const newBoard = await Board.create({
      title,
      cost,
      description,
      areas,
      address,
      creator: req.user._id
    });
    files.forEach(file => {
      newBoard.imageUrls.push(file.location);
    });
    await newBoard.save();
    res.redirect(routes.boardDetail(newBoard._id));
  } catch (error) {
    console.log(error);
    res.redirect(`/board${routes.boardUpload}`);
    res.status(400);
  }
};
export const getBoardDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const board = await Board.findOne({ _id: id }).populate('creator');
    res.render('boardDetail', { pageTitle: '포스트', board });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const getBoardEdit = (req, res) => {
  res.render('boardEdit', { pageTitle: '포스트 수정' });
};
export const getBoardDelete = (req, res) => {
  res.render('home');
};

export const getBoardArea = (req, res) => {
  const {
    params: { area }
  } = req;
  res.render('boardArea', { pageTitle: area });
};
