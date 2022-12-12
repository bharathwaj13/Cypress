/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'
import '@4tw/cypress-drag-drop'

describe('Practice Mouse Operations', () => {

    it('Mouse Hover', () => {
        cy.visit('https://demo.opencart.com/');
        cy.get('.nav-link').contains('Macs').should('not.be.visible');
        cy.get('.nav-link.dropdown-toggle').contains('Laptops & Notebooks').trigger('mouseover').click();
        cy.get('.nav-link').contains('Macs').should('be.visible');
    })

    it('Right Click', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html');
        cy.get('li').contains('Cut').should('not.be.visible');
        cy.get('span').contains('right click me').rightclick();
        cy.get('li').contains('Cut').should('be.visible');

    })

    it('Double Click', () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
        cy.frameLoaded('#iframeResult');

        //Method1
        //cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').dblclick();
        //Method2
        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick');

    })


    it('Drag And Drop using plugin', () => {
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        cy.get('.dragableBox').contains('Washington').drag('#box103', { force: true });
    })


    it.only('Scrolling a page', () => {
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html');
        cy.get('td').contains('India').scrollIntoView({ duration: 2000 });
        cy.get('td').contains('India').should('be.visible');
    })

})