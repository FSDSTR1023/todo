const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
 
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
})
)


// app.use(express.json()); //metodo que tiene express para devolver json y no texto plano


require('dotenv').config() // modulo dotenv para que se configure


const mongoose =require('mongoose') //para la base de datos


 const mongoDB = //string que enviamos
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



async function main() {                //funcion asincrona que enviamos con main que es una convencion 
  await mongoose.connect(mongoDB);
}
main().catch((err) => console.log(err));  //le pasamos la funcion, y si hay un error se lo pasamos

const taskRoutes = require('./routes/task.routes');
const userRoutes = require('./routes/user.routes');

app.use('/task', taskRoutes); 
app.use ('/user', userRoutes); //todo lo que venga de barra task utiliza esa ruta

app.get('/', (req, res) => {
    console.log(process.env.DB_USER);
    res.send('task-api')
})

app.listen(port, () => {console.log('servidor escuchando...',port)})










