const User = require("./models/userModel");

const isAuthorized = async (req, res, next) => {
  console.log("Authentication proccess");
  next();
};

module.exports = isAuthorized;
