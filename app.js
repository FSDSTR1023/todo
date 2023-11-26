const express = require('express')
const app = express()
const port = 3000

app.use(express.json()); 

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

require('dotenv').config();

const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+"@"+process.env.DB_SERVER+"/"+process.env.DB_NAME+"?retryWrites=true&w=majority";
async function main() {
    await mongoose.connect(mongoDB);
}
main().catch(err => console.log(err));

const users = [
    {
        firstname: "Jordi",
        lastname: "Galobart",
        email: "jordi.galobart@example.com",
        password: "password"
    },
    {
        firstname: "Enrique",
        lastname: "Garcia",
        email: "enrique.garcia@example.com",
        password: "password"
    },
]

var tasks = require("./routes/tasks")
app.use('/tasks', tasks)

app.get('/', (req,res) =>{
    console.log(process.env.DB_USER)
    res.send('Welcome TODO Application')
})

app.get('/users', (req,res) => {
    res.json(users);
})

app.post('/login', (req, res) => {
    const { email, password } = req.body; // Accede a los campos email y password de req.body
    console.log(req.body);
    const userFound = users.find(
        (u) => u.email === email && u.password === password
    );
    if (userFound) {
        res.send('Inicio de sesión exitoso');
    } else {
        res.status(401).send('Credenciales incorrectas');
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})