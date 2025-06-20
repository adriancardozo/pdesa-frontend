describe('Favorite', () => {
  beforeEach(function () {
    cy.log('1');
    cy.visit(Cypress.env('app_url'));
    cy.log('2');
    cy.fixture('purchaser').then((purchaser) => {
      cy.log('3');
      this.purchaser = purchaser;
      cy.log('4');
      cy.login(this.purchaser.username, this.purchaser.password);
      cy.log('5');
    });
    cy.log('6');
    cy.fixture('search').then((search) => {
      cy.log('7');
      this.search = search;
      cy.log('8');
      cy.get('[data-testid=product-search-input]').type(this.search.text);
      cy.log('9');
      cy.get('[data-testid=product-search-submit]').click();
      cy.log('10');
    });
  });

  describe('Click favorite', () => {
    beforeEach(function () {
      cy.get('[data-testid=product]').first().as('firstProduct');
      cy.get('@firstProduct').find('[data-testid=unfavorite]').first().as('firstUnfavorite');
      cy.get('@firstUnfavorite').click();
      cy.get('@firstProduct').find('[data-testid=favorite]');
    });

    it('should change from unfavorite to favorite', function () {
      cy.get('@firstProduct').find('[data-testid=favorite]').should('exist');
    });

    it("shouldn't show unfavorite", function () {
      cy.get('@firstProduct').find('[data-testid=unfavorite]').should('not.exist');
    });

    afterEach(() => {
      cy.get('@firstProduct').find('[data-testid=favorite]').click();
      cy.get('@firstProduct').find('[data-testid=unfavorite]');
    });
  });

  describe('Click unfavorite', () => {
    beforeEach(function () {
      cy.get('[data-testid=product]').first().as('firstProduct');
      cy.get('@firstProduct').find('[data-testid=unfavorite]').first().click();
      cy.get('@firstProduct').find('[data-testid=favorite]').first().as('firstFavorite');
      cy.get('@firstFavorite').click();
      cy.get('@firstProduct').find('[data-testid=unfavorite]');
    });

    it('should change from favorite to unfavorite', function () {
      cy.get('@firstProduct').find('[data-testid=unfavorite]').should('exist');
    });

    it("shouldn't show favorite", function () {
      cy.get('@firstProduct').find('[data-testid=favorite]').should('not.exist');
    });
  });
});
