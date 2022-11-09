const express = require("express");
const app = express();
const morgan = require("morgan");

const usersRouter = require('./routers/userRouter');

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/my-users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

console.log("mongoose connected");

app.use(express.json());
app.use(morgan("dev"));

app.use('/user', usersRouter);

app.get("/", (req, res) => {
  res.send("App is running...")
})

const port = 3000;
app.listen(port, () => {
  console.log("Listening to port 3000");
})