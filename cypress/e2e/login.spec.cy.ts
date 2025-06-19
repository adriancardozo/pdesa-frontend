describe('Login', () => {
  it('Gets, types and asserts', () => {
    cy.fixture('app').then((app) => {
      cy.visit(app.url);
    });
    cy.fixture('purchaser').then(({ username, password }) => {
      cy.login(username, password);
    });

    cy.url().should('include', '/home');
    cy.window()
      .then((window) => window.localStorage.getItem('token'))
      .should('not.be.null');
  });
});
