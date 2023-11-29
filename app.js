import express from 'express'
const app = express()
import tasks from "./routes/tasks.js";
import users from "./routes/users.js";
import dotenv from 'dotenv'
import mongoose from 'mongoose';
// require('dotenv').config();
dotenv.config()
app.use(express.json());
const port = 3000
// const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_SERVER + "/" + process.env.DB_NAME + "?retryWrites=true&w=majority";
async function main() {
    await mongoose.connect(mongoDB);
}
main().catch(err => console.log(err));

app.use(express.json());

app.use("/tasks", tasks);
app.use("/users", users);

app.use((req, res) => {
    res.status(404).send("404 - Not Found");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("500 - Server Error");
});
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

