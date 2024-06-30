describe('Login Test', () => {
  it('should login successfully with correct credentials', () => {
    cy.visit('http://www.warering.online/home');
    cy.contains("Sign In").click();
    cy.get('#username').type('AumNatthacha');
    cy.get('#password').type('Natthacha-2002');
    cy.get('#setup-user-drawer-submit').click();
    cy.screenshot();
  });
  
});
