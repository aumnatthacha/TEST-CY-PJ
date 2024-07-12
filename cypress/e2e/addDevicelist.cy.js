import { login } from "./spec.cy";

describe("Device List Test", () => {
  it("should login successfully with correct credentials and perform device operations", () => {
    login("AumNatthacha", "Natthacha2002");

    // Add Device
    cy.get("#devices-nav-link-sidebar").click();
    
    cy.get("#setup-user-submit").click();
    cy.get("#nameDevice").type("Sensor_01");
    cy.get("#usernameDevice").type("user");
    cy.get("#password").type("password123");
    cy.get("#description").type("แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_01 เช่น อุณหภูมิและความชื้น");
    cy.get("#topics").type("ข้อมูลส่งทุก 10 นาที");
    cy.get("#Qos").type("0", { force: true });
    cy.get("#retain-checkbox").click();
    cy.get("#add-device-submit-btn").click();
    cy.contains("Created your Sensor_01 device").should("be.visible");
    cy.screenshot();

    // Edit Device
    /*
    cy.get("#6683ab5fc7b871479e612507-edit-device-btn").click();
    cy.get("#nameDevice").clear().type("อุปกรณ์การเกษตร 2", { force: true });
    cy.get("#usernameDevice").clear().type("K-0012", { force: true });
    cy.get("#password").clear().type("K001-K2", { force: true });
    cy.get("#description").clear().type("อุปกรณ์การเกษตร 2", { force: true });
    // cy.get("#Qos").type("", { force: true });
    cy.get("#topics").clear().type("K-0012", { force: true });
    cy.get("#submit-edit-dashboard-btn").click();
    */

    // Optionally, delete device (uncomment if needed)
    /*
    cy.get("#6683ab5fc7b871479e612507-delete-device-btn").click();
    cy.wait(2000);
    cy.get("#confirm-delete-device").click();
    */

    cy.screenshot();
  });
});
