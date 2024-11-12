describe("Flight search test", () => {
  it("should inject a flight into the database and verify it exists", () => {
    // Fetch all flights and verify the injected flight is present
    cy.request("GET", "http://app:3001/api/flights/search").then((response) => {      
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      expect(response.body.length).to.be.greaterThan(0);

      // Check if the returned flight matches the search criteria
      const flight = response.body[0];
      expect(flight).to.have.property("departureLocation", "New York (JFK)");
      expect(flight).to.have.property("destinationLocation", "Los Angeles (LAX)");
    });
  });
});
