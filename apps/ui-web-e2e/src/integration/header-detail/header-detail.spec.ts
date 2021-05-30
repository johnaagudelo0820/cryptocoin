describe('ui-web: HeaderDetail component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headerdetail--primary'));

  it('should render the title', () => {
    cy.get('.MuiTypography-h4').should('contain', 'Bitcoin');
  });

  it('should render the symbol', () => {
    cy.get('.MuiTypography-body1').should('contain', 'BTC');
  });

  it('should render the image', () => {
    cy.get('.MuiAvatar-img').should('have.attr', 'src');
  });

  it('should render the indicator', () => {
    cy.get('.MuiBox-root-3 > .MuiBox-root > div').should('contain', '🟢')
  });

  it('should render the price', () => {
    cy.get('.MuiBox-root-3 > .MuiBox-root > div').should('contain', '🟢')
  })
});
