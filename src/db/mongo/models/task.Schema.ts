import { Schema, Types, model } from 'mongoose';
import { Status } from '../../../domain/interfaces/interfaces';

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: [Status.COMPLETED, Status.IN_PROGRESS, Status.PENDING], default: Status.PENDING },
    dateStart: { type: Date },
    dateEnd: { type: Date },
    user: { type: Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date }
})

export const TaskSchema = model('Task', taskSchema);
