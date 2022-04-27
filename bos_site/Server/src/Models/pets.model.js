const mongoose = require("mongoose");

const petsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    capacity: { type: Number, required: true },
    costperday: { type: Number, required: true },
    rating: { type: String, required: true },
    verified: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Pets = new mongoose.model("pets", petsSchema);

module.exports = Pets;
