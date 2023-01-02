describe('App test', () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/tricks", {
      method: 'GET',
      fixture: '../fixtures/tricks.json'
    });
    cy.visit('http://localhost:3000/')
  })
  it('Should have a title', () => {
    cy.contains('h1', 'Sick Trick Wish List')
  })
  it('Should load 3 tricks', () => {
    cy.get('.tricks-container').within(() => {
      cy.get('.trick-card').should('have.length', 3)
    })
  })
  it('Should show the griddy card', () => {
    cy.get('.tricks-container').within(() => {
      cy.get('.trick-card').eq(2).should('contain', 'griddy')
    })
  })
  it("Should be able to fill in the forms and create a new trick", () => {
    cy.get("input[name='name']")
      .type("plug walk")
      .get("input[name='stance']")
      .type("switch")
      .get("input[name='obstacle']")
      .type("John Stamos")
      .get("input[name='tutorial']")
      .type("https://youtu.be/_8m-SGKHuQ8");
      cy.get("button[class='send-it']").click();
    cy.get("h3")
      .contains("plug walk")
      .get("p")
      .contains("switch")
      .get("p")
      .contains("John Stamos")
      .get("p")
      .contains("https://youtu.be/_8m-SGKHuQ8");
  })
})