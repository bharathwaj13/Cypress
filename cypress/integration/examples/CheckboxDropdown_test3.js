/// <reference types="Cypress" />

describe('My third test suite', () => {

    it('My third test case', () => {

        cy.visit(Cypress.env('url')+"/AutomationPractice/");

        //checkbox

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // To select multiple checkboxes

        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        // Static Dropdown

        cy.get('select').select('option2').should('have.value', 'option2')

        //Dynamic Dropdown

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === 'India') {
                cy.wrap($el).click()
                cy.get('#autocomplete').should('have.value','India')
            }
        })

        // To check Visibility of an element

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // RadioButtons

        cy.get('[value="radio2"]').check().should('be.checked')


        })
    })