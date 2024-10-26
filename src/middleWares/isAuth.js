const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { User } = require("../models/UserModels");
dotenv.config();
const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.token;

    if (!token)
      return res.status(403).json({
        message: "Please login",
      });

    const decode = jwt.verify(token, process.env.Jwt_sec);

    req.user = await User.findById(decode._id);

    next();
  } catch (error) {
    res.status(500).json({
      message: "Login first",
    });
  }
};

module.exports = {
  isAuth,
};
