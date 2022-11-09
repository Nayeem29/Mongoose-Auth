const express = require('express');
const { User } = require('../models/users');
const router = express.Router();

const newUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists");
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  try {
    const result = await user.save();
    res.send({
      name: result.name,
      email: result.email
    });
  } catch (err) {
    const error = [];
    for (fields in err.errors) {
      error.push(err.errors[fields].message);
    }
    return res.status(400).send(error);
  }
}

router.route('/')
  .post(newUser);

module.exports = router;