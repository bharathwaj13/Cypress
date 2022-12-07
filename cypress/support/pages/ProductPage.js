/// <reference types="Cypress" />

class ProductPage {

    getCardTitleElements() {
        return cy.get('h4.card-title');
    }

    getAddToCartButton(){
        return cy.get('button.btn.btn-info');
    }

    getCheckoutButton(){
        return cy.get('a.nav-link.btn');
    }

}


export default ProductPage;