/// <reference types="Cypress" />

describe('My fourth test suite', () => {

    it('My fourth test case', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Alerts

        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        // window:alert event will be triggered when the app opens a alert. It is a browser thing
        // We need to trigger this event from Cypress to get Text

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        // Handling tabs
        // Need to remove target Attribute using removeAttr jquery function
        // from the element so that it will not open in a new tab
        // Cypress cannot handle a new tab

        cy.get('#opentab').invoke('removeAttr','target').click()
        //To assert URL
        cy.url().should('include','https://www.rahulshettyacademy.com/')
        // To go back to main page
        cy.go('back')




    })
})