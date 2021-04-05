import mongoose from 'mongoose';

const BoardSchema = new mongoose.Schema({
  imageUrls: [
    {
      type: String,
      required: 'File URL is required'
    }
  ],
  title: {
    type: String,
    required: 'Title is required'
  },
  cost: {
    type: Number,
    required: 'Cost is required'
  },
  areas: {
    type: String,
    required: 'Area is required'
  },
  address: {
    type: String,
    required: 'Address is required'
  },
  coords: {
    type: String,
    required: 'Coords is required'
  },
  description: {
    type: String,
    required: 'Description is required'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const model = mongoose.model('Board', BoardSchema);
export default model;
