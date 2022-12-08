/// <reference types="Cypress" />

describe('My first test suite', () => {

    it('My first test case', () => {

        cy.visit(Cypress.env('url')+"seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)

        // First way
        cy.get('.product:visible').should('have.length', 4)

        // Alias to store like in a variable
        cy.get('.products').as('Products')

        // Second way using Parent child chaining
        cy.get('@Products').find('.product').should('have.length', 4)

        // To add second element to cart - This method is better than second type below
        cy.get('@Products').find('.product').eq(1).contains('ADD TO CART').click()

        //dblclick() used to Double click a button

        // Direct css for Second Add to Cart Button
        //div.products>div:nth-of-type(2)>.product-action>button

        //cy.get('div.products>div:nth-of-type(2)>.product-action>button').click()

        // To loop over the elements and find the correct element based on a condition

        // Need to check why the below line is not working
        //if (cy.wrap($el).find('h4.product-name').contains('Capsicum')) {



        cy.get('@Products').find('.product').each(($el, index, $list) => {
            const vegName = $el.find('h4.product-name').text()
            cy.log('vegname' +vegName);
            if (vegName.includes('Capsicum')) {
                cy.wrap($el).find('button').click()

            }
        })
        // text() is not a cypress comand. It is a jquery command
        // So we need to manually resolve the promise before using them

        cy.get('div.brand').then((logoElement) => {

            //console.log will print in Browser's console. Its not from Cypress

            cy.log(logoElement.text())
        })

        //assert if logo text is correctly displayed
        cy.get('div.brand').should('have.text', 'GREENKART')

    })
})