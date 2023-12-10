import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
  modifiedAt: Date,
  deletedAt: { type: Date, default: null }
});

const User = mongoose.model('User', userSchema, 'users_db');

export default User;
