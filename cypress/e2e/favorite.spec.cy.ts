describe('Favorite', () => {
  beforeEach(function () {
    cy.visit('http://localhost:5173');
    cy.fixture('purchaser').then((purchaser) => {
      this.purchaser = purchaser;
      cy.login(this.purchaser.username, this.purchaser.password);
    });
    cy.fixture('search').then((search) => {
      this.search = search;
      cy.get('[data-testid=product-search-input]').type(this.search.text);
      cy.get('[data-testid=product-search-submit]').click();
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
