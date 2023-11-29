const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  createdAt: Date,
  modifiedAt: Date,
  deletedAt: Date,
  task: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
});

module.exports = mongoose.model("User", userSchema);