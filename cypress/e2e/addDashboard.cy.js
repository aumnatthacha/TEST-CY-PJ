describe("Add Dashboard Test", () => {
  it("should login successfully with correct credentials", () => {
    cy.visit("http://www.warering.online/home");
    cy.contains("Sign In").click();
    cy.get("#username").type("AumNatthacha");
    cy.get("#password").type("Natthacha2002");
    cy.get("#setup-user-drawer-submit").click();

    //Add Dashboard
    cy.get("#dashboard-nav-link-sidebar").click();
    // cy.get("#toggle-add-dashboard-dialog-btn").click(); 
    // cy.get("#nameDashboard").type("PTT-3");
    // cy.get('#description').type('PTT-3', { force: true });
    // cy.get("#submit-add-dashboard-btn").click();

    //Edit
    cy.get("#edit-dashboard-option-6680e36ec7b871479e610bcf").click();
    cy.get("#nameDashboard").clear().type("PT-49");
    cy.get("#description").clear({ force: true }).type("PT-49", { force: true });
    cy.get("#submit-edit-dashboard-btn").click();

    //DELETED
    // cy.get("#delete-dashboard-option-6680e50bc7b871479e610c5c").click();
    // cy.wait(2000);
    // cy.get("#confirm-delete-dashboard-btn").click();

    cy.screenshot();
  });
});
