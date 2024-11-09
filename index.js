require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Import cors
const sequelize = require("./config/database");
const flightRoutes = require("./routes/flights");
const errorHandler = require("./middleware/errorHandler");
const seedFlights = require("./seeders/flightSeeder");
const PORT = process.env.PORT || 3001;

const app = express();

// Use CORS middleware to allow requests from all origins
app.use(cors());

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
