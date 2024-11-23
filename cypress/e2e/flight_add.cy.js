describe("Flight add test", () => {
  const sampleFlight = {
    flightNumber: "TEST123",
    departureLocation: "New York (JFK)",
    destinationLocation: "Los Angeles (LAX)",
    departureTime: "2024-11-20T08:00:00",
    arrivalTime: "2024-11-20T11:30:00",
    cost: 300,
    availableSeats: 20,
  };

  it("should inject a flight into the database and verify it exists", () => {
    // Inject the flight using POST request
    cy.request("POST", "http://test_app:3001/api/flights/add", sampleFlight).then((response) => {
      expect(response.status).to.eq(201); // Check for successful creation
      expect(response.body).to.exist;

      const foundFlight = response.body;
      expect(foundFlight.departureLocation).to.eq(sampleFlight.departureLocation);
      expect(foundFlight.destinationLocation).to.eq(sampleFlight.destinationLocation);
      expect(new Date(foundFlight.departureTime).toISOString()).to.eq(
        new Date(sampleFlight.departureTime).toISOString()
      );
      expect(new Date(foundFlight.arrivalTime).toISOString()).to.eq(
        new Date(sampleFlight.arrivalTime).toISOString()
      );
      expect(foundFlight.cost).to.eq(sampleFlight.cost);
      expect(foundFlight.availableSeats).to.eq(sampleFlight.availableSeats);
    });

    // Fetch all flights and verify the injected flight is present
    cy.request("GET", "http://test_app:3001/api/flights/search").then((response) => {
      expect(response.status).to.eq(200);
      const flights = response.body;

      // Check if our sample flight is in the list of flights
      const foundFlight = flights.find((flight) => flight.flightNumber === sampleFlight.flightNumber);
      expect(foundFlight).to.exist;
      expect(foundFlight.departureLocation).to.eq(sampleFlight.departureLocation);
      expect(foundFlight.destinationLocation).to.eq(sampleFlight.destinationLocation);
      expect(new Date(foundFlight.departureTime).toISOString()).to.eq(
        new Date(sampleFlight.departureTime).toISOString()
      );
      expect(new Date(foundFlight.arrivalTime).toISOString()).to.eq(
        new Date(sampleFlight.arrivalTime).toISOString()
      );
      expect(foundFlight.cost).to.eq(sampleFlight.cost);
      expect(foundFlight.availableSeats).to.eq(sampleFlight.availableSeats);
    });
  });
});
