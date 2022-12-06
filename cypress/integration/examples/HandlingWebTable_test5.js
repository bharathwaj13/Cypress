/// <reference types="Cypress" />

describe('My fifth test suite', () => {

    it('My fifth test case', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // Handling WebTable

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const courseText = $el.text()
            if (courseText.includes('Python')) {
                // next() is to go to the Next Sibling Element
                // But we have to use next() method only on get()

                cy.get('tr td:nth-child(2)').eq(index).next().then((courseFee) => {
                    const price = courseFee.text()
                    expect(price).to.equal('25')
                })
            }
        })




    })
})