/// <reference types="Cypress" />

class CheckoutPage{

    getCheckoutButton(){
        return cy.get('.btn.btn-success');
    }

    getCountryEdit(){
        return cy.get('#country');
    }

    getCountryDropDown(country){
        return cy.get('li a').contains(country);
    }

    getTermsConditionsCheckBox(){
        return cy.get('.checkbox.checkbox-primary');
    }

    getPurchaseButton(){
        return cy.get('input[value="Purchase"]');
    }

    getSuccessMessage(){
        return cy.get('div.alert');
    }

    getProductTotalElements(){
        return cy.get('tr td:nth-child(4) strong');
    }

    getCheckoutTotalElement(){
        return cy.get('h3 strong');
    }

}


export default CheckoutPage;