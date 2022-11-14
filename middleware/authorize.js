const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  //get token from req header
  let token = req.header('Authorization');
  console.log(token);
  if (!token) return res.status(401).send("Access Denied!");
  token = token.split(' ')[1].trim();
  //verify token
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).send("Not Found")
  }

}