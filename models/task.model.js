import { Schema, model } from 'mongoose';
import { status } from '../data/tasks.data.js';

// Schema defines the STRUCTURE of documents in the collection
// this is the BLUEPRINT for all instances
const taskSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: [status.PENDING, status.IN_PROGRESS, status.COMPLETED]
  },
  datestart: Date,
  dateend: Date,
  user: String,
  createdAt: Date,
  modifiedAt: Date,
  deletedAt: Date,
});

// Student is our mongoose model class
// all students in students collection will share these properties
// Mongoose turns models name to a collection name (Student --> students)
export default model("Task", taskSchema);