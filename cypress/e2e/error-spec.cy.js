describe('error handling', () => {
  it('Displays an error message for a bad request', () => {
    cy.intercept(
      "GET",
      "https://api.song.link/v1-alpha.1/links?url=https://open.spotify.com/track/6OpU3cvY19M2hFxTbLKy5L?si=c5d6a02b04bb4d97",
      {
        statusCode: 500,
        fixture: "results",
      }
    ).as("results");
    cy.visit("http://localhost:3000/jfgyjfgh");
    cy.get("p").should('contain', 'the page you are looking for does not exist');
    cy.visit("http://localhost:3000/")
    cy.get(".url-input").type(
      "https://open.spotify.com/track/6OpU3cvY19M2hFxTbLKy5L?si=c5d6a02b04bb4d97"
    );
    cy.get("button").click();
    cy.get('.results-container').should('contain', "Error")
  });
})
