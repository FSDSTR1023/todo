import mongoose from "mongoose";

const usersSchema = new mongoose.Schema ({
        name: String ,
        surname: String,
        email: {type: String, required: true},
        password: Number,
        cratedAt: Date,
        modifiedAt: Date,
        deletedAt: {type: Date, default: null},
    });

const users = mongoose.model("Users", usersSchema);

export default users;