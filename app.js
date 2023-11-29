const express = require('express');

const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:5174',
        credentials: true,}
));
require('dotenv').config();

const mongoose = require('mongoose');

const mongoDB =
    'mongodb+srv://' +
    process.env.DB_USER +
    ':' +
    process.env.DB_PASSWORD +
    '@' +
    process.env.DB_SERVER +
    '/' +
    process.env.DB_NAME +
    '?retryWrites=true&w=majority';
console.log(mongoDB, 'mongoDB');
async function main() {
    await mongoose.connect(mongoDB);
}
main().catch((err) => console.log(err));

const taskRoutes = require('./routes/task.routes');
const userRoutes = require('./routes/user.routes');

app.use('/task', taskRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    console.log(process.env.DB_USER, ' <---- process.env.DB_USER de app.js');
    res.json('TASK API BACKEND');
});

app.listen(port, () => {
    console.log('Server running on port: ', port);
});
