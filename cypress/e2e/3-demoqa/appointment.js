/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
import UserFields from "../../pageObjects/userFields";

describe('Selectable Page', () => {
  beforeEach(() => {
    UserFields.visit();
  });

  it("Make appointment", () => {
    UserFields.makeAppointmentButton();
  });

 /* it("Validate Not Selected Items", () => {
    GridPage.clickGridItems();
    GridPage.validateNotSelected();
  });*/
});