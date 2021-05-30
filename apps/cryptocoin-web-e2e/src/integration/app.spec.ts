describe('cryptocoin-web', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title message', () => {
    // Function helper example, see `../support/app.po.ts` file
    cy.get('.MuiToolbar-root h6').should('contain', 'Coincap');
  });

  it('should load home wiew', () => {
    cy.url().should('include', '/');
  });

  it('should navigate to Bitcoin detail', () => {
    cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiListItemText-primary').click();
    cy.url().should('include', '/bitcoin');
    cy.get('.MuiTypography-h4').should('contain', 'Bitcoin');
  });

  it('should return home', () => {
    cy.get('a').click();
    cy.url().should('include', '/')
  });

  it('should navigate to Ethereum detail', () => {
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiListItemText-primary').click();
    cy.url().should('include', '/ethereum')
    cy.get('.MuiTypography-h4').should('contain', 'Ethereum');
  });
});
