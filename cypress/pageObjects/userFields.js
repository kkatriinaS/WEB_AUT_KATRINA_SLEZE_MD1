class UserFields {
  
    static visit() {
      cy.visit(this.url);
    }
  
    static makeAppointmentButton() {
      cy.click('#btn-make-appointment');
    }
  
  
    static validateSelected() {
      cy.get('#row1 > .list-group-item').contains('Two').should('have.class', 'active list-group-item-action');
      cy.get('#row2 > .list-group-item').contains('Four').should('have.class', 'active list-group-item-action');
      cy.get('#row2 > .list-group-item').contains('Six').should('have.class', 'active list-group-item-action');
      cy.get('#row3 > .list-group-item').contains('Eight').should('have.class', 'active list-group-item-action');
    }
    
 
  
    static validateNotSelected() {
        cy.get('#row1 > .list-group-item:not(.active)').should('contain', 'One');
        cy.get('#row1 > .list-group-item:not(.active)').should('contain', 'Three');
        cy.get('#row2 > .list-group-item:not(.active)').should('contain', 'Five');
        cy.get('#row3 > .list-group-item:not(.active)').should('contain', 'Seven');
        cy.get('#row3 > .list-group-item:not(.active)').should('contain', 'Nine');
      } 
  }
  export default UserFields;