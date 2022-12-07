/// <reference types="Cypress" />


describe('My sixth test suite', () => {

    it('My sixth test case', () => {

        cy.visit(Cypress.env('url')+"AutomationPractice/");

        // Handling Mouse Hover
        // No direct support in Cypress. Should be handled alternatively using 'show' jquery function
        // To invoke a jquery function use "invoke" as seen earlier in Tabs handling
        cy.get('.mouse-hover div').invoke('show');
        cy.get('.mouse-hover div').contains('Top').click();

        // Cypress can also click hidden elements by passing {force:true} as an argument to the click
        // method
        // So here instead of mouse hovering also, we can directly click on the Hidden menu "Top"
        // cy.contains('Top').click({force:true});
        cy.url().should('include','top');


       




    })
})