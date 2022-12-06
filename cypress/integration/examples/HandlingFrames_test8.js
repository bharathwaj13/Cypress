/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'


describe('Frames Suite', () => {

    it('Frames Test', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // Handling Frames
        // npm install -D cypress-iframe command need to be executed and the package imported here
        // frameLoaded method will show only if we import cypress-iframe  
        cy.frameLoaded('#courses-iframe');
        //iframe() method is used to perform any operation within the mentioned frame
        cy.iframe().find('nav.main-menu').contains('Mentorship').click();
        cy.wait(1000);
        cy.iframe().find("div[class*='pricing-container']").should('have.length',2);
        //cy.iframe().find("h1[class*='pricing-title']").should('have.length',2);
        




    })
})