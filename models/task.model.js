import mongoose from 'mongoose';
import { statusTypes } from '../mock_data/tasks.data.js';

const { Schema } = mongoose;

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, default: null },
    status: { type: String, default: statusTypes.PENDING },
    dateStart: { type: Date, default: null },
    dateEnd: { type: Date, default: null },
    // user: String,
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null }
});

export default mongoose.model("Task", taskSchema);