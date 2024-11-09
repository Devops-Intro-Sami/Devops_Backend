const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Flight = require("./Flight");

const Booking = sequelize.define("Booking", {
  bookingId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  seatsBooked: { type: DataTypes.INTEGER, allowNull: false },
});

Booking.belongsTo(Flight);

module.exports = Booking;
