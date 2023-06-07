class GridPage {
    static get url() {
      return "/selectable";
    }
  
    static visit() {
      cy.visit(this.url);
    }
  
        static clickGridItems() {
          cy.get("#demo-tab-grid").click();
          cy.get(".list-group-item").contains("Two").click();
          cy.get(".list-group-item").contains("Four").click();
          cy.get(".list-group-item").contains("Six").click();
          cy.get(".list-group-item").contains("Eight").click();
    }
  
  
    static validateSelected() {
      cy.get('#row1 > .list-group-item.active)').should('contain', 'Two');
      cy.get('#row2 > .list-group-item.active)').should('contain', 'Four');
      cy.get('#row2 > .list-group-item.active)').should('contain', 'Six');
      cy.get('#row3 > .list-group-item.active)').should('contain', 'Eight');
    }
 
  
    static validateNotSelected() {
        cy.get('#row1 > .list-group-item:not(.active)').should('contain', 'One');
        cy.get('#row1 > .list-group-item:not(.active)').should('contain', 'Three');
        cy.get('#row2 > .list-group-item:not(.active)').should('contain', 'Five');
        cy.get('#row3 > .list-group-item:not(.active)').should('contain', 'Seven');
        cy.get('#row3 > .list-group-item:not(.active)').should('contain', 'Nine');
      } 
  }
  export default GridPage;