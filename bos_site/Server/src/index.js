const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PetsControllers = require("./Controllers/pets.controller");
const UsersControllers = require("./Controllers/users.controller");
const { register, login } = require("./Controllers/auth.controller");

app.use("/pets", PetsControllers);
app.use("/users", UsersControllers);

app.post("/register", register);
app.post("/login", login);

module.exports = app;
