require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const flightRoutes = require("./routes/flights");
const errorHandler = require("./middleware/errorHandler");
const PORT = process.env.PORT || 3000;  // Default to 3000 if PORT is undefined

const app = express();
app.use(express.json());

// Route configuration
app.use("/api/flights", flightRoutes);

// Error handling middleware
app.use(errorHandler);

// Database connection and server start
sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Database connection error:", err));
