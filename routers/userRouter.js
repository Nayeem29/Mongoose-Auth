const express = require('express');
const { User } = require('../models/users');
const router = express.Router();
const bcrypt = require('bcrypt');
const authorize = require('../middleware/authorize');

const newUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists");
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  const salt = await bcrypt.genSalt(10);
  // console.log(salt);
  user.password = await bcrypt.hash(user.password, salt);
  // console.log(hassedPass);
  try {
    const result = await user.save();
    const token = user.generateJWT();
    res.send({
      token: token,
      data: {
        name: result.name,
        email: result.email
      }
    });
  } catch (err) {
    const error = [];
    for (fields in err.errors) {
      error.push(err.errors[fields].message);
    }
    return res.status(400).send(error);
  }
}

const getUsers = async (req, res) => {
  const allUser = await User.find({});
  res.send(allUser);
}

router.route('/')
  .post(newUser)
  .get(authorize, getUsers)

module.exports = router;