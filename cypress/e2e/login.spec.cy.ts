describe('Login', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:5173');
    cy.fixture('purchaser').then(({ username, password }) => {
      cy.login(username, password);
    });

    cy.url().should('include', '/home');
    cy.window()
      .then((window) => window.localStorage.getItem('token'))
      .should('not.be.null');
  });
});
