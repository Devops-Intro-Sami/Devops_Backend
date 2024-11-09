const Flight = require("../models/Flight");

exports.searchFlights = async (req, res) => {
  const { departureLocation, destinationLocation } = req.query;

  try {
    const flights = await Flight.findAll({
      where: { departureLocation, destinationLocation },
    });

    if (flights.length === 0) {
      return res.status(404).json({ message: "No flights found!" });
    }

    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
