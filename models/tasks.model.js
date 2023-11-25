const mongoose = require('mongoose');

// here we are getting access to Schema class from mongoose
const Schema = mongoose.Schema;

// Schema defines the STRUCTURE of documents in the collection
// this is the BLUEPRINT for all instances
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

// Student is our mongoose model class
// all students in students collection will share these properties
// Mongoose turns models name to a collection name (Student --> students)
module.exports = mongoose.model("Task", tasksSchema);