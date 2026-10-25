const express = require("express");
const router = express.Router();
const Crop = require("../models/Crop");
const authMiddleware = require("../middleware/authMiddleware");

// Get all crops (login required)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const crops = await Crop.find();
    res.json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one crop by ID (login required)
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.id);

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found"
      });
    }

    res.json(crop);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

// Add a crop (login required)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const crop = await Crop.create(req.body);
    res.status(201).json(crop);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

module.exports = router;