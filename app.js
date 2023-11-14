import express from "express";
import testMiddleware from "./middleware/test.middleware.js";
import tasks from "./routes/tasks.js";
import users from "./routes/users.js";

const app = express()
const port = 3000

app.use(express.json()); 

app.use(testMiddleware.logginCallRoute); //usamos el middleware creado

app.use('/tasks', tasks); //usar el fichero de tasks cuando entremos en la ruta

app.use('/users', users); //usar el fichero de users cuando entremos en la ruta

app.use((req,res) => { 
    res.status(404).json("404 - Not Found");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("500 - Server Error");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})