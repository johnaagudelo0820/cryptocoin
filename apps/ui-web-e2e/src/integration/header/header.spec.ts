describe('ui-web: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary'));

  it('should render the component', () => {
    cy.get('.MuiTypography-root').should('contain', 'Coincap');
  });

  it('should render the component switch', () => {
    cy.get('input').should('have.attr', 'checked');
  });
});