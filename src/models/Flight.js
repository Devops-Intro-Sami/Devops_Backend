const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Flight = sequelize.define("Flight", {
  flightNumber: { type: DataTypes.STRING, allowNull: false },
  departureLocation: { type: DataTypes.STRING, allowNull: false },
  destinationLocation: { type: DataTypes.STRING, allowNull: false },
  departureTime: { type: DataTypes.DATE, allowNull: false },
  arrivalTime: { type: DataTypes.DATE, allowNull: false },
  cost: { type: DataTypes.FLOAT, allowNull: false },
  availableSeats: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Flight;
