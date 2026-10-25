
const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    scientificName: {
      type: String,
      default: ""
    },
    season: {
      type: String,
      default: ""
    },
    climate: {
      type: String,
      default: ""
    },
    soil: {
      type: String,
      default: ""
    },
    growth: {
      type: String,
      default: ""
    },
    sowing: {
      type: String,
      default: ""
    },
    harvest: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    pesticides: {
      type: [String],
      default: []
    },
    fertilizers: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crop", cropSchema);
