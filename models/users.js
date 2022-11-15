const jwt = require('jsonwebtoken');
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
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    }
  }
)

userSchema.methods.generateJWT = function () {
  const token = jwt.sign({ _id: this._id, email: this.email, role: this.role }, process.env.SECRET_KEY);
  return token;
}

const User = model("User", userSchema);

module.exports.User = User;