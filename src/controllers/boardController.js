import { s3 } from '../middleware';
import Board from '../models/Board';
import User from '../models/User';
import routes from '../routes';
// Upload
export const getBoardUpload = (req, res) => {
  res.render('boardUpload', { pageTitle: '업로드' });
};
export const postBoardUpload = async (req, res) => {
  const {
    body: { title, cost, description, areas, address, coords },
    files
  } = req;
  const brDescription = description.replaceAll(/\r\n/g, '<br>');
  try {
    let newBoard = await Board.create({
      title,
      cost,
      description: brDescription,
      areas,
      address,
      coords,
      creator: req.user._id
    });
    files.forEach(file => {
      newBoard.imageUrls.push(file.location);
    });
    newBoard = await newBoard.save();
    req.user.boards.push(newBoard._id);
    req.user = await req.user.save();
    res.redirect(routes.boardDetail(newBoard._id));
  } catch (error) {
    console.log(error);
    res.redirect(`/board${routes.boardUpload}`);
  }
};
// Board Detail
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
// Board Edit
export const getBoardEdit = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const board = await Board.findOne({ _id: id });
    res.render('boardEdit', { pageTitle: '포스트 수정', board });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const postBoardEdit = async (req, res) => {
  const {
    params: { id },
    body: { title, cost, description, areas, address, coords },
    files
  } = req;
  try {
    const board = await Board.findOneAndUpdate(
      { _id: id },
      {
        title,
        cost,
        description,
        areas,
        address,
        coords,
        imageUrls: []
      }
    );
    files.forEach(file => {
      board.imageUrls.push(file.location);
    });
    await board.save();
    res.redirect(routes.boardDetail(board._id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
// Board Delete
export const getBoardDelete = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const board = await Board.findOne({ _id: id });
    board.imageUrls.forEach(imageUrl => {
      const key = imageUrl.split('/photos/')[1];
      s3.deleteObject(
        {
          Bucket: 'shstore-side-project',
          Key: `photos/${key}`
        },
        (err, data) => {
          if (err) console.log(err, err.stack);
          else console.log(data);
        }
      );
    });
    const user = await User.findOne({ _id: board.creator });
    user.boards = user.boards.filter(elem => {
      return elem.toString() !== id;
    });
    await user.save();
    await board.remove();
    res.redirect(routes.home);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
// Board Area
export const getBoardArea = async (req, res) => {
  const {
    params: { area }
  } = req;
  try {
    const boards = await Board.find({ areas: area }).sort({ _id: -1 });
    res.render('boardArea', { pageTitle: area, area, boards });
  } catch (error) {
    console.log(error);
    res.render('boardArea', { pageTitle: area, area, boards: [] });
  }
};
// API getCoords
export const getCoords = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const board = await Board.findOne({ _id: id });
    const coords = JSON.parse(board.coords);
    res.send(coords);
  } catch (error) {
    console.log(error);
  }
};
