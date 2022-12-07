/// <reference types="Cypress" />

class HomePage {

    getNameEdit() {
        return cy.get('input[name="name"].form-control');
    }

    getGenderSelect() {
        return cy.get('select');
    }

    getTwoWayBindingEdit() {
        return cy.get('h4 input[name="name"]');
    }

    getEntrepeunerRadio(){
        return cy.get('#inlineRadio3');
    }

    getShopLink(){
        return cy.get('a').contains('Shop');
    }
}

export default HomePage;