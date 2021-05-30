describe('ui-web: ItemListCrypto component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=itemlistcrypto--primary'));
    
    it('should render the component', () => {
      cy.get('.MuiListItemText-primary').should('contain', 'Bitcoin');
    });

    it('should render the component', () => {
      cy.get('.MuiListItemText-primary').should('contain', 'Bitcoin');
    });
});
