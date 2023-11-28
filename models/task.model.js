const mongoose = require('mongoose');

// here we are getting access to Schema class from mongoose
const Schema = mongoose.Schema;

// Schema defines the STRUCTURE of documents in the collection
// this is the BLUEPRINT for all instances
const taskSchema = new Schema({
    title: String,
    description: String,
    status: String,
    datestart: Date,
    dateend: Date,
    user: String,
    createdAt: Date,
    modifiedAt: Date,
    deletedAt: Date
});


// Student is our mongoose model class
// all students in students collection will share these properties
// Mongoose turns models name to a collection name (Student --> students)
module.exports = mongoose.model("Task", taskSchema);