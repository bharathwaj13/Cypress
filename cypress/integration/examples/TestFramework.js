/// <reference types="Cypress" />

describe("Framework Hooks", () => {
    let data;
    //All fixtures loading part should be done inside before Hook
    before(() => {
        //runs once before all the tests in the describe block
        // here example is the name of the json file inside fixtures folder
        cy.fixture('example').then((fdata) => {
            data = fdata;
        })
    })

    it("Angular Site", () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get('input[name="name"].form-control').type(data.name);
        cy.get('select').select(data.gender);
        cy.get('h4 input[name="name"]').should('have.value', data.name);

        //To directly assert if attribute is having some value, then use below:
        // Else if we need to get the value of attribute, then use thr prop() method and resolve
        // promise as shown in previous tests
        cy.get('input[name="name"].form-control').should('have.attr', 'minlength', '2');
        cy.get('#inlineRadio3').should('be.disabled');
        cy.get('a').contains('Shop').click();
        cy.addToCart(data.product);

    })



})