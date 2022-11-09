const bcrypt = require('bcrypt');

const saltPassword = async () => {
  const salt = await bcrypt.genSalt(10);
  console.log(salt);
  const hassedPass = await bcrypt.hash("192892", salt);
  console.log(hassedPass);
}

saltPassword();