import mongoose from 'mongoose';

const BoardSchema = new mongoose.Schema({});

const model = mongoose.model('User', BoardSchema);
export default model;
