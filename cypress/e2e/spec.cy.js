describe('App test', () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/tricks", {
      method: 'GET',
      fixture: '../fixtures/tricks.json'
    });
    cy.visit('http://localhost:3000/')
  })
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
  it('Should have a title', () => {
    cy.contains('h1', 'Sick Trick Wish List')
  })
})