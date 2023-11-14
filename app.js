import express from "express";
import testMiddleware from "./middleware/test.middleware.js";
import tasks from "./routes/tasks.js";
import users from "./routes/users.js";

const app = express()
const port = 3000

app.use(express.json());

app.use(testMiddleware);

app.use('/tasks', tasks);

app.use('/users', users);



app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 - Server Error");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
