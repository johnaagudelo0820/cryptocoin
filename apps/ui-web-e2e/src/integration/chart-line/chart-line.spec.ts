describe('ui-web: ChartLine component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chartline--primary'));

  it('should render the component', () => {
    cy.get("canvas");
  });
});
