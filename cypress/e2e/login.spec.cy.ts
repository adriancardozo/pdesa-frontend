describe('Login', () => {
  it('Login user', () => {
    cy.visit(Cypress.env('app_url'));
    cy.fixture('purchaser').then(({ username, password }) => {
      cy.login(username, password);
    });

    cy.url().should('include', '/home');
    cy.window()
      .then((window) => window.localStorage.getItem('token'))
      .should('not.be.null');
  });
});
