const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");
const Product = require("../models/Product");
const authMiddleware = require("../middleware/authMiddleware");

// Get logged-in user's bookings
router.get("/", authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user.userId,
    })
      .populate("user", "name email")
      .populate("product", "name price image");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a booking
router.post("/", authMiddleware, async (req, res) => {
  try {
    const productId = req.body.product;
    const quantity = Number(req.body.quantity);

    if (
      !productId ||
      !/^[a-fA-F0-9]{24}$/.test(String(productId)) ||
      !Number.isInteger(quantity) ||
      quantity < 1
    ) {
      return res.status(400).json({
        message: "Valid product ID and quantity are required",
      });
    }

    const selectedProduct = await Product.findById(productId);

    if (!selectedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    if (selectedProduct.stock < quantity) {
      return res.status(400).json({
        message: "Not enough stock available",
      });
    }

    const booking = await Booking.create({
      user: req.user.userId,
      product: selectedProduct._id,
      quantity: quantity,
      totalAmount: selectedProduct.price * quantity,
    });

    const populatedBooking = await Booking.findById(booking._id)
      .populate("user", "name email")
      .populate("product", "name price image");

    return res.status(201).json(populatedBooking);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Booking failed",
    });
  }
});

module.exports = router;