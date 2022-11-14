const express = require('express');
const { User } = require('../models/users');
const router = express.Router();
const bcrypt = require('bcrypt');

const authRoute = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Wrong Email ");
  const bcryptPassword = await bcrypt.compare(req.body.password, user.password);
  // console.log(user.email, user.password, req.body.email, req.body.password);
  if (!bcryptPassword) return res.status(400).send("Wrong Email or Password");

  const token = user.generateJWT();

  res.send({ token: token });
}
router.route('/')
  .post(authRoute)

module.exports = router;