import { Schema, Types, model } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date },
    tasks: [{ type: Types.ObjectId, ref: 'Task' }]
});

export const UserSchema = model('User', userSchema);