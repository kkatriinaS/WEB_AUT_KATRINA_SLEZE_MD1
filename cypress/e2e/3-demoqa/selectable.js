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
import GridPage from "../../pageObjects/gridPage";

describe('Selectable Page', () => {
  beforeEach(() => {
    GridPage.visit();
  });

  it("Grid Items", () => {
    GridPage.clickGridItems();
    GridPage.validateSelected();
  });

  it("Validate Not Selected Items", () => {
    GridPage.clickGridItems();
    GridPage.validateNotSelected();
  });
});