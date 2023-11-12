describe("Stream Seeker", () => {
  it("displays form and header on load", () => {
    cy.visit("http://localhost:3000/");
    cy.get("header").contains("h1", "STREAM SEEKER").should("be.visible");
    cy.get("header").contains("My Saved Streams");
    cy.get(".url-input").should("have.attr", "placeholder", "song url");
    cy.get(".alt-form").should("exist");
    cy.get(".alt-service-select").should("be.visible");
  });

  it("has a form to fill", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".url-input")
      .type(
        "https://open.spotify.com/track/6OpU3cvY19M2hFxTbLKy5L?si=c5d6a02b04bb4d97"
      )
      .should(
        "have.value",
        "https://open.spotify.com/track/6OpU3cvY19M2hFxTbLKy5L?si=c5d6a02b04bb4d97"
      );
    cy.get(".alt-form")
      .get(".alt-service-select")
      .select("spotify")
      .should("have.value", "spotify");
    cy.get(".alt-form")
      .get(".alt-type-select")
      .select("song")
      .should("have.value", "song");
    cy.get(".alt-form")
      .get(".alt-id-input")
      .type("c5d6a02b04bb4d97")
      .should("have.value", "c5d6a02b04bb4d97");
  });

  it("can submit url form and see data on dom", () => {
    cy.intercept(
      "GET",
      "https://api.song.link/v1-alpha.1/links?url=https://open.spotify.com/track/6OpU3cvY19M2hFxTbLKy5L?si=c5d6a02b04bb4d97",
      {
        statusCode: 200,
        fixture: "results",
      }
    ).as("results");
    cy.visit("http://localhost:3000/");
    cy.get(".url-input").type(
      "https://open.spotify.com/track/6OpU3cvY19M2hFxTbLKy5L?si=c5d6a02b04bb4d97"
    );
    cy.get("button").click();
    cy.url().should("contain", "localhost:3000/results");
    cy.get(".results-container").get(".card").first().should("contain", "Juno");
    cy.get(".card").first().should("contain", "Choker");
    cy.get(".card")
      .first()
      .get(".card-thumbnail")
      .should(
        "have.attr",
        "src",
        "https://m.media-amazon.com/images/I/51EZI5-oKuL.jpg"
      );
    cy.get(".results-container").get(".card").last().should("contain", "Juno");
    cy.get(".card").last().should("contain", "Choker");
    cy.get(".card-thumbnail")
      .last()
      .should(
        "have.attr",
        "src",
        "https://i.ytimg.com/vi/qrc94vzwznw/hqdefault.jpg"
      );
    cy.get(".results-container").get(".card").should("have.length", "16");
  });

  it("can submit alt form and see data on dom", () => {
    cy.intercept(
      "GET",
      "https://api.song.link/v1-alpha.1/links?platform=spotify&type=song&id=6OpU3cvY19M2hFxTbLKy5L",
      {
        statusCode: 200,
        fixture: "results",
      }
    ).as("results");
    cy.visit("http://localhost:3000/");
    cy.get(".alt-form")
      .get(".alt-service-select")
      .select("spotify")
      .should("have.value", "spotify");
    cy.get(".alt-form").get(".alt-type-select").select("song");
    cy.get(".alt-form").get(".alt-id-input").type("6OpU3cvY19M2hFxTbLKy5L");
    cy.get("button").click();
    cy.url().should("contain", "localhost:3000/results");
    cy.get(".results-container").get(".card").first().should("contain", "Juno");
    cy.get(".card").first().should("contain", "Choker");
    cy.get(".card")
      .first()
      .get(".card-thumbnail")
      .should(
        "have.attr",
        "src",
        "https://m.media-amazon.com/images/I/51EZI5-oKuL.jpg"
      );
    cy.get(".results-container").get(".card").last().should("contain", "Juno");
    cy.get(".card").last().should("contain", "Choker");
    cy.get(".card-thumbnail")
      .last()
      .should(
        "have.attr",
        "src",
        "https://i.ytimg.com/vi/qrc94vzwznw/hqdefault.jpg"
      );
  });

  it("can save cards and remove cards from saved", () => {
    cy.intercept(
      "GET",
      "https://api.song.link/v1-alpha.1/links?url=https://open.spotify.com/track/6OpU3cvY19M2hFxTbLKy5L?si=c5d6a02b04bb4d97",
      {
        statusCode: 200,
        fixture: "results",
      }
    ).as("results");
    cy.visit("http://localhost:3000/");
    cy.get(".url-input").type(
      "https://open.spotify.com/track/6OpU3cvY19M2hFxTbLKy5L?si=c5d6a02b04bb4d97"
    );
    cy.get("button").click();
    cy.get(".results-container").get(".card-save").first().click();
    cy.visit("http://localhost:3000/saved");
    cy.get(".results-container")
      .get(".card")
      .should(
        "contain",
        "https://music.amazon.com/albums/B07FMHQ6W1?trackAsin=B07FMR3LX3"
      );
    cy.get('button').click().get('.results-container').contains('p', 'No saved stream links! Add some!')

  });
});
