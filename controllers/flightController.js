const { Op } = require("sequelize"); // Import Op for operators
const Flight = require("../src/models/Flight");

exports.searchFlights = async (req, res) => {
  const { departureLocation, destinationLocation } = req.query;

  try {
    // Building dynamic where clause based on input query parameters
    const where = {};
    if (departureLocation) {
      where.departureLocation = {
        [Op.iLike]: `%${departureLocation}%`, // Case-insensitive partial match
      };
    }
    if (destinationLocation) {
      where.destinationLocation = {
        [Op.iLike]: `%${destinationLocation}%`, // Case-insensitive partial match
      };
    }

    const flights = await Flight.findAll({
      where,
    });

    if (flights.length === 0) {
      return res.status(404).json({ message: "No flights found!" });
    }

    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// New booking logic
exports.bookFlight = async (req, res) => {
  const { flightId, seatsToBook } = req.body;

  try {
    const flight = await Flight.findByPk(flightId);

    if (!flight) {
      return res.status(404).json({ message: "Flight not found!" });
    }

    // Check if enough seats are available
    if (seatsToBook > flight.availableSeats) {
      return res.status(400).json({ message: "Not enough available seats." });
    }

    // Update available seats
    flight.availableSeats -= seatsToBook;

    await flight.save(); // Save the updated flight

    res.json({
      message: `Successfully booked ${seatsToBook} seat(s) on flight ${flight.flightNumber}!`,
      availableSeats: flight.availableSeats, // Return updated available seats
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addFlight = async (req, res) => {
  try {
    const { flightNumber, departureLocation, destinationLocation, departureTime, arrivalTime, cost, availableSeats } = req.body;
    console.log("in add in backend");
    // Validate request data
    if (!flightNumber || !departureLocation || !destinationLocation || !departureTime || !arrivalTime || !cost || !availableSeats) {
      return res.status(400).json({ error: "All flight details are required" });
    }

    // Create a new flight in the database
    const newFlight = await Flight.create({
      flightNumber,
      departureLocation,
      destinationLocation,
      departureTime,
      arrivalTime,
      cost,
      availableSeats,
    });

    res.status(201).json(newFlight); // Send back the created flight
  } catch (error) {
    console.error("Error adding flight:", error);
    res.status(500).json({ error: "Failed to add flight" });
  }
};