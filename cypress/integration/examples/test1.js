describe('My first test suite', () => {

    it('My first test case', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)

        // First way
        cy.get('.product:visible').should('have.length', 4)

        // Second way using Parent child chaining
        cy.get('.products').find('.product').should('have.length', 4)

        // To add second element to cart - This method is better than second type below
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        // Direct css for Second Add to Cart Button
        //div.products>div:nth-of-type(2)>.product-action>button

        //cy.get('div.products>div:nth-of-type(2)>.product-action>button').click()

        // To loop over the elements and find the correct element based on a condition

        cy.get('div.products').find('.product').each(($el, index, $list) => {
            if (cy.wrap($el).contains('Carrot')) {
                cy.wrap($el).find('button').click()
            }
        })



    })
})