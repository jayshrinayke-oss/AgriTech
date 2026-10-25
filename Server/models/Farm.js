
const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 0
    },
    soilType: {
      type: String,
      default: ""
    },
    crops: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Crop"
    }],
    description: {
      type: String,
      default: ""
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Farm", farmSchema);
