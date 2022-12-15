/// <reference types="Cypress" />


describe('My seventh test suite', () => {

    it('My seventh test case', () => {

        cy.visit(Cypress.env('url')+"AutomationPractice/");

        // Handling Windows
        // prop() is the jquery method used to get the attribute of an element
        // We can get the 'href' attribute using prop('href') method and do a cy.visit()
        // to open that particular link in the same window.
        // But we cannot visit a site of another domain other the main domain using cy.visit()
        // That is why for Handling tabs earlier, we did by removing Target attribute method
        let url='';
        cy.get('#opentab').then((ele) => {
           url= ele.prop('href');
           cy.log(url);
        })

        // Commenting the below line as we cannot visit a site of another domain other the main domain using cy.visit()
        //cy.visit(url);


       




    })
})