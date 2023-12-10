import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ['PENDING', 'IN PROGRESS', 'COMPLETED'], default: 'PENDING' },
  dateStart: Date,
  dateEnd: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: Date,
  deletedAt: { type: Date, default: null }
});

const Task = mongoose.model('Task', taskSchema, 'tasks_db');

export default Task;
