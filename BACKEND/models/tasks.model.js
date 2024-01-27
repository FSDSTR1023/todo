const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const status = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN PROGRESS',
  COMPLETED: 'COMPLETED'
};

const taskSchema = new Schema({

  id: Number,
  title: String,
  description: String,
  status: {type: String, enum: [status.PENDING, status.IN_PROGRESS, status.COMPLETED]},
  datestart: Date,
  dateend: Date,
  user: String,
  deletedAt: Date
},{
  timestamps:true
});

module.exports = mongoose.model("Task", taskSchema);