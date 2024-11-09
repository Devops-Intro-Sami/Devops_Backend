const Flight = require("../src/models/Flight");

const flightData = [
  {
    flightNumber: "FL123",
    departureLocation: "New York (JFK)",
    destinationLocation: "Los Angeles (LAX)",
    departureTime: "2024-11-10T08:00:00",
    arrivalTime: "2024-11-10T11:30:00",
    cost: 250,
    availableSeats: 5,
  },
  {
    flightNumber: "FL456",
    departureLocation: "Chicago (ORD)",
    destinationLocation: "Miami (MIA)",
    departureTime: "2024-11-11T14:00:00",
    arrivalTime: "2024-11-11T18:00:00",
    cost: 180,
    availableSeats: 8,
  },
  {
    flightNumber: "FL789",
    departureLocation: "San Francisco (SFO)",
    destinationLocation: "Seattle (SEA)",
    departureTime: "2024-11-12T10:00:00",
    arrivalTime: "2024-11-12T12:00:00",
    cost: 120,
    availableSeats: 15,
  },
  {
    flightNumber: "FL101",
    departureLocation: "Dallas (DFW)",
    destinationLocation: "Boston (BOS)",
    departureTime: "2024-11-13T09:00:00",
    arrivalTime: "2024-11-13T13:30:00",
    cost: 210,
    availableSeats: 12,
  },
  {
    flightNumber: "FL202",
    departureLocation: "Denver (DEN)",
    destinationLocation: "Las Vegas (LAS)",
    departureTime: "2024-11-14T06:00:00",
    arrivalTime: "2024-11-14T07:30:00",
    cost: 100,
    availableSeats: 20,
  },
  {
    flightNumber: "FL303",
    departureLocation: "Orlando (MCO)",
    destinationLocation: "Atlanta (ATL)",
    departureTime: "2024-11-15T11:00:00",
    arrivalTime: "2024-11-15T13:00:00",
    cost: 150,
    availableSeats: 10,
  },
];

const seedFlights = async () => {
  try {
    const count = await Flight.count();
    if (count === 0) {
      await Flight.bulkCreate(flightData);
      console.log("Flight data seeded successfully");
    } else {
      console.log("Flights table already populated");
    }
  } catch (error) {
    console.error("Error seeding flights:", error);
  }
};

module.exports = seedFlights;
