const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  console.log("Authentication proccess");
  next();
};

module.exports = requireAuth;
