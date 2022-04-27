require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../Models/users.model");

const newToken = (user) => {  
  return jwt.sign({ user }, "Bheema");
};

const register = async (req, res) => {
  console.log("req.body", req.body);
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    if (user) return res.send({ message: "Mail Id already registered" });

    user = await User.create(req.body);
    // console.log("user:", user);

    const token = newToken(user);
    // console.log("token:", token);

    const mailid = user.email;
    return res.send({ mailid, token });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.send({ message: "Mail Id not registered" });

    const match = user.checkPassword(req.body.password);

    if (!match)
      return res.send({ message: "Your email or password is incorrect" });

    const token = newToken(user);

    const mailid = user.email;
    const role = user.role;

    res.send({ mailid, role, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { register, login, newToken };
