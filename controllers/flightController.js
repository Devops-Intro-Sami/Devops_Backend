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
