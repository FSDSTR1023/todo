const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: String,
  description: String,
  status: String,
  user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  datestart: Date,
  dateend: Date,
  createdAt: Date,
  modifiedAt: Date,
  deletedAt: Date
}, {
  timestamps: true
});

module.exports = mongoose.model("Task", taskSchema);

