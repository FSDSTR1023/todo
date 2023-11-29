import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    status: { type: String, enum: ['TO DO', 'IN PROGRESS', 'COMPLETED'], default: 'TO DO' },
    datestart: { type: Date },
    dateend: { type: Date },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
