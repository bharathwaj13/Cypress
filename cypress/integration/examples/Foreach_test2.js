/// <reference types="Cypress" />

describe('My second test suite', () => {

    it('My second test case', () => {

        cy.visit(Cypress.env('url')+"seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)

        // Alias to store like in a variable
        cy.get('.products').as('Products')

        // To add second element to cart - This method is better than second type below
        cy.get('@Products').find('.product').eq(1).contains('ADD TO CART').click()

        // Direct css for Second Add to Cart Button
        //div.products>div:nth-of-type(2)>.product-action>button

        //cy.get('div.products>div:nth-of-type(2)>.product-action>button').click()

        // To loop over the elements and find the correct element based on a condition

        // Need to check why the below line is not working
        //if (cy.wrap($el).find('h4.product-name').contains('Capsicum')) {

        cy.get('@Products').find('.product').each(($el, index, $list) => {
            const vegName = $el.find('h4.product-name').text()
            if (vegName.includes('Capsicum')) {
                cy.wrap($el).find('button').click()
            }
        })
        // text() is not a cypress comand. It is a jquery command
        // So we need to manually resolve the promise before using them

       cy.get('a.cart-icon img').click()
       cy.contains('PROCEED TO CHECKOUT').click()
       cy.contains('Place Order').click()

    })
})