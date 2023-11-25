import { Schema, model } from 'mongoose';

// Schema defines the STRUCTURE of documents in the collection
// this is the BLUEPRINT for all instances
const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
});

// Student is our mongoose model class
// all students in students collection will share these properties
// Mongoose turns models name to a collection name (Student --> students)
export default model("User", userSchema);