const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 20
    },
    email: {
      type: String,
      require: true,
      unique: true,
      minLength: 8,
      maxLength: 255
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 1024
    }
  }
)

const User = model("User", userSchema);

module.exports.User = User;