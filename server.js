const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./index');
const mongoose = require("mongoose");

// console.log(process.env);

mongoose.connect('mongodb://localhost:27017/my-users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("mongoose connected"))
  .catch(err => console.log("mongoose not connected"))

// console.log("mongoose connected");

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
})