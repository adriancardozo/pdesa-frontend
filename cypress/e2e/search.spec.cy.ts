describe('Search', () => {
  beforeEach(function () {
    cy.visit(Cypress.env('app_url'));
    cy.fixture('purchaser').then((purchaser) => {
      this.purchaser = purchaser;
      cy.login(this.purchaser.username, this.purchaser.password);
    });
    cy.fixture('search').then((search) => {
      this.search = search;
    });
  });

  describe('With results', () => {
    beforeEach(function () {
      cy.get('[data-testid=product-search-input]').type(this.search.text);
      cy.get('[data-testid=product-search-submit]').click();
    });

    it('should redirect to results page', function () {
      cy.url().should('include', `/results?q=${this.search.text}`);
    });

    it('should get at least one product', function () {
      cy.get('[data-testid=product]').should('exist');
    });
  });

  describe('Without results', () => {
    beforeEach(function () {
      cy.get('[data-testid=product-search-submit]').click();
    });

    it("shouldn't redirect to results page", function () {
      cy.url().should('include', `/home`);
    });

    it("shouldn't to show products", function () {
      cy.get('[data-testid=product]').should('not.exist');
    });
  });
});
