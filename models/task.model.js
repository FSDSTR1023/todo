const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema(
    {
        title:
        {
            type: String,
            required: true,
            trim: true,
            minlength: 3
        },
        description:
        {
            type: String,
            required: true,
            trim: true,
            minlength: 3
        },
        dateStart:
        {
            type: Date,
            required: true,
            trim: true,
            default: Date.now()
        },
        dateEnd:
        {
            type: Date,
            required: true,
            trim: true,
            default: Date.now()
        },
        status:
        {
            type: String,
            required: true,
            default: 'pending'
        },
        user:
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Task', taskSchema);