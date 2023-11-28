const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: String,
  description: String,
  status: String,
  datestart: Date,
  dateend: Date,
  createdAt: Date,
  modifiedAt: Date,
  deletedAt: Date
});

module.exports = mongoose.model("Task", taskSchema);

