require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const flightRoutes = require("./routes/flights");
const errorHandler = require("./middleware/errorHandler");
const seedFlights = require("./seeders/flightSeeder"); // Import seeder
const PORT = process.env.PORT || 3001; // Default to 3001 if PORT is undefined

const app = express();
app.use(express.json());

// Route configuration
app.use("/api/flights", flightRoutes);
app.use("/ping", (_, res) => res.send("Pong!"));

// Error handling middleware
app.use(errorHandler);

// Database connection and server start
sequelize
  .sync()
  .then(async () => {
    console.log("Database synced");

    // Run the seeder
    await seedFlights();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Database connection error:", err));
