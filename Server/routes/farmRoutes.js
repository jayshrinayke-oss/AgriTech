const express = require("express");
const router = express.Router();
const Farm = require("../models/Farm");
const authMiddleware = require("../middleware/authMiddleware");

// Get all farms
router.get("/", authMiddleware, async (req, res) => {
  try {
    const farms = await Farm.find();
    res.json(farms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one farm by ID
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.id);

    if (!farm) {
      return res.status(404).json({
        message: "Farm not found"
      });
    }

    res.json(farm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add a farm
router.post("/", authMiddleware, async (req, res) => {
  try {
    const farm = await Farm.create(req.body);
    res.status(201).json(farm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;