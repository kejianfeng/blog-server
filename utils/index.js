const {JWT_CONFIG} = require("../config")
const jwt = require('jsonwebtoken');
const sign = (data) => {
  try{
    return jwt.sign({
      data,
    }, JWT_CONFIG.privateKey, { expiresIn: 60 * 60 });
  }catch(err) {
    throw err
  }
}

const verify  = (token) => {
  try{
    return jwt.verify(token, JWT_CONFIG.privateKey);
  }catch(err) {
    throw err
  }
}

module.exports = {
  sign,
  verify
}