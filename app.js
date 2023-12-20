const express = require("express");
const app = express();
const port = 8000;
const tasks = require("./routes/tasks.js");

app.use(express.json());
require("dotenv").config();

const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASSWORD +
  "@" +
  process.env.DB_SERVER +
  "/" +
  process.env.DB_NAME +
  "?retryWrites=true&w=majority";
  
console.log(mongoDB , "mongoDB");
async function main() {
  await mongoose.connect(mongoDB);
}
main().catch((err) => console.log(err));

app.use("/tasks", tasks);

app.get("/", (req, res) => {
  console.log(process.env.DB_USER);
  res.send("Mi App TODO");
});
app.use((req, res) => {
  res.status(404).send("404 Page not found");
});
app.listen(port, () => {
  console.log(`Server listen on port: ${port}`);
});
