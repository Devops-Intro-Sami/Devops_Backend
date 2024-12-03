const express = require("express");
const router = express.Router();
const flightController = require("../controllers/flightController");

// search flights route
router.get("/search", flightController.searchFlights);

// booking route
router.post("/book", flightController.bookFlight);

/// add flight
router.post("/add", flightController.addFlight);

module.exports = router;
