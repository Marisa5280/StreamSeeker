// describe("url shortener", () => {
//   beforeEach(() => {
//     cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
//       statusCode: 200,
//       fixture: "urls",
//     }).as("urls");
//   });

//   it("displays existing data, form, and header on load", () => {
//     cy.visit("http://localhost:3000/").wait("@urls");

//     cy.get("header").contains("h1", "URL Shortener").should("be.visible");

//     cy.get("form");
//     cy.get('[placeholder="Title..."]').should("exist");
//     cy.get('[placeholder="URL to Shorten..."]').should("exist");

//     cy.get(".url").contains("h3", "Awesome photo").should("exist");
//     cy.get("a").contains("http://localhost:3001/useshorturl/1").should("exist");
//   });

//   it("has a form to fill", () => {
//     cy.visit("http://localhost:3000/").wait("@urls");
//     cy.get("form");
//     cy.get('[placeholder="Title..."]')
//       .type("test")
//       .should("have.value", "test");
//     cy.get('[placeholder="URL to Shorten..."]')
//       .type("https://www.notion.so/IdeaBox-0d09bfd740864ca88f44894416c259fa")
//       .should(
//         "have.value",
//         "https://www.notion.so/IdeaBox-0d09bfd740864ca88f44894416c259fa"
//       );
//   });

//   it("can submit form and see data on dom", () => {
//     cy.visit("http://localhost:3000/").wait("@urls");
//     cy.get("form");
//     cy.get('[placeholder="Title..."]')
//       .type("test")
//       .should("have.value", "test");
//     cy.get('[placeholder="URL to Shorten..."]')
//       .type("https://www.notion.so/IdeaBox-0d09bfd740864ca88f44894416c259fa")
//       .should(
//         "have.value",
//         "https://www.notion.so/IdeaBox-0d09bfd740864ca88f44894416c259fa"
//       );
//     cy.get("button").click();

//     cy.get("section > :nth-child(2)").should("exist");
//     // cy.get("a").contains("http://localhost:3001/useshorturl/2").should("exist");
//   });
// });