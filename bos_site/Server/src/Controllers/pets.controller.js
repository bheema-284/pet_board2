const Pets = require("../Models/pets.model");
const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const pets = await Pets.create(req.body);
    return res.status(200).send(pets);
  } catch (e) {
    console.log("e:", e);
  }
});

router.get("", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 1;
    // console.log("req.query.size:", req.query.size);
    // console.log("page:", req.query.page);

    const pets = await Pets.find() // 30 documents
      .skip((page - 1) * size) // page 1 first 15 documents
      .limit(size)
      .lean()
      .exec();

    return res.status(200).send(pets);
  } catch (e) {
    console.log("e:", e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pets = await Pets.findById(req.params.id);
    return res.status(200).send(pets);
  } catch (e) {
    console.log("e:", e);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const pets = await Pets.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(pets);
  } catch (e) {
    console.log("e:", e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const pets = await Pets.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(pets);
  } catch (e) {
    console.log("e:", e);
  }
});

module.exports = router;
