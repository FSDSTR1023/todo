const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tasksSchema = new Schema({
    id: mongoose.ObjectId,
    title: { type: String, required: true },
    description: String,
    status: { type: String, enum: ['pending', 'completed', 'in-progress'], default: 'pending' },
    datestart: Date,
    dateend: Date,
    user: String,
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default:null },
    deletedAt: { type: Date, default:null },
});
module.exports = mongoose.model("Task", tasksSchema);