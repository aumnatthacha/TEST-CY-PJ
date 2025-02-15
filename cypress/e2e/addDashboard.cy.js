import { login } from "./spec.cy";

describe("Add Dashboard Test", () => {
  it("should login successfully with correct credentials and perform device operations", () => {
    login("AumNatthacha", "Natthacha2002");

    // Click on Dashboard link
    cy.get("#dashboard-nav-link-sidebar").click();
    cy.contains("Dashboard").click();

    // Add Dashboard
    cy.get("#toggle-add-dashboard-dialog-btn").click();
    cy.get("#nameDashboard").type("Sensor_01");
    cy.get("#description").type("แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_01 เช่น อุณหภูมิและความชื้น", { force: true });
    cy.get("#submit-add-dashboard-btn").click();
    cy.contains("Your Sensor_01 dashboard has been added").should("be.visible");
    cy.contains("Sensor_01").should("be.visible");
    cy.screenshot();

    // Edit Dashboard
    cy.get("#edit-dashboard-option-66913351fed9b7834140e06b").click();
    cy.get("#nameDashboard").clear().type("Sensor_02");
    cy.get("#description").clear({ force: true }).type("อุณหภูมิและความชื้น", { force: true });
    cy.get("#submit-edit-dashboard-btn").click();
    cy.contains("updated your dashboard").should("be.visible");
    cy.screenshot();

    // Delete Dashboard
    cy.get("#delete-dashboard-option-66913351fed9b7834140e06b").click();
    cy.get("#confirm-delete-dashboard-btn").click();
    cy.contains("deleted your dashboard").should("be.visible");
    cy.screenshot();
  });
});
