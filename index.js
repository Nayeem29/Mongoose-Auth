const express = require("express");
const app = express();
const morgan = require("morgan");

const usersRouter = require('./routers/userRouter');
const userAuth = require('./routers/authRouter');



app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  console.log("development mode");
  app.use(morgan("dev"));
}

app.use('/user', usersRouter);
app.use('/signin', userAuth);
app.use('/allUser', usersRouter);
app.use('/deleteUser', usersRouter);
app.use('/updateRole', usersRouter);

app.get("/", (req, res) => {
  res.send("App is running...")
})

module.exports = app;