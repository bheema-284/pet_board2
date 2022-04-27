const Users = require("../Models/users.model");
const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const user = await Users.create(req.body);
    return res.status(200).send(user);
  } catch (e) {
    console.log("e:", e);
  }
});

router.get("", async (req, res) => {
  try {
    const user = await Users.find().lean().exec();
    return res.status(200).send(user);
  } catch (e) {
    console.log("e:", e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    return res.status(200).send(user);
  } catch (e) {
    console.log("e:", e);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(user);
  } catch (e) {
    console.log("e:", e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (e) {
    console.log("e:", e);
  }
});

module.exports = router;
