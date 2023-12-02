import mongoose from "mongoose";

export const statuses ={
    PENDING: 'PENDING',
    INPROGRESS: 'IN PROGRESS',
    COMPLETED: 'COMPLETED',
}

const tasksSchema = new mongoose.Schema ({
        title: String,
        description: String,
        status: {
            type: String,
            enum: Object.values(statuses),
            default: statuses.PENDING,
        },
        datestart: Date,
        dateend: Date,
        user: String,
        createdAt: Date,
        modifiedAt: Date,
        deletedAt: {type: Date, default: null},
}); 

const tasks = mongoose.model ("Tasks", tasksSchema );

export default tasks;