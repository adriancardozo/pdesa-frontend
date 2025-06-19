describe('Search', () => {
  beforeEach(function () {
    cy.fixture('app').then((app) => {
      cy.visit(app.url);
    });
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

    it('should to show product names', function () {
      cy.get('[data-testid=product]').each((element, index) => {
        cy.wrap(element).should('contain.text', this.search.results[index].name);
      });
    });

    it('should to show product images', function () {
      cy.get('[data-testid=product] img').each((element, index) => {
        cy.wrap(element).should('have.attr', 'src', this.search.results[index].images[0]);
      });
    });

    it('should to show fullfilled favorite icon if product is favorite', function () {
      cy.get('[data-testid=product]').each((element, index) => {
        if (this.search.results[index].is_favorite) {
          cy.wrap(element).get('[data-testid=favorite]').should('exist');
        }
      });
    });

    it("should to show fullfilled favorite icon if product isn't favorite", function () {
      cy.get('[data-testid=product]').each((element, index) => {
        if (!this.search.results[index].is_favorite) {
          cy.wrap(element).get('[data-testid=unfavorite]').should('exist');
        }
      });
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
