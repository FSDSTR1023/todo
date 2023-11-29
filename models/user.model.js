import mongoose from 'mongoose';
import { validateEmail } from '../helpers/emailValidation.js';

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: 'A name is required'
    },
    lastName: {
        type: String,
        required: 'Lastname is required'
    },
    username: {
        type: String,
        required: 'Username is required',
        unique: true
    },
    password: {
        type: String,
        required: 'Password is required',
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
});

export default mongoose.model("User", userSchema);