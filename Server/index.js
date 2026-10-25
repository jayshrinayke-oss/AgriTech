
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db/config");
const cropRoutes = require("./routes/cropRoutes");
const farmRoutes = require("./routes/farmRoutes");
const productRoutes = require("./routes/productRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/crops", cropRoutes);
app.use("/api/farms", farmRoutes);
app.use("/api/products", productRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("AgriTech Backend is running!");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
