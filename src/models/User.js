import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema({
  email: String,
  nickname: String,
  avatarUrl: String,
  avatarKey: String,
  naverId: Number,
  kakaoId: Number,
  googleId: Number,
  boards: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board'
  }
});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const model = mongoose.model('User', UserSchema);
export default model;
