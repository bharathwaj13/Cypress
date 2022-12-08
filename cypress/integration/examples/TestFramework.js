/// <reference types="Cypress" />

import HomePage from '../../support/pages/HomePage';
import ProductPage from '../../support/pages/ProductPage';
import CheckoutPage from '../../support/pages/CheckoutPage';

describe("Framework Hooks", () => {
    let data;
    const productPage = new ProductPage();
    const homePage = new HomePage();
    const checkoutPage = new CheckoutPage();

    //All fixtures loading part should be done inside before Hook
    before(() => {
        //runs once before all the tests in the describe block
        // here example is the name of the json file inside fixtures folder
        cy.fixture('example').then((fdata) => {
            data = fdata;
        })
    })

    it("Angular Site", () => {

        cy.visit(Cypress.env('url')+"angularpractice/");
        homePage.getNameEdit().type(data.name);
        homePage.getGenderSelect().select(data.gender);
        homePage.getTwoWayBindingEdit().should('have.value', data.name);

        //To directly assert if attribute is having some value, then use below:
        // Else if we need to get the value of attribute, then use thr prop() method and resolve
        // promise as shown in previous tests
        homePage.getNameEdit().should('have.attr', 'minlength', '2');
        homePage.getEntrepeunerRadio().should('be.disabled');
        //To pause the execution and run line by line
        //cy.pause();
        homePage.getShopLink().click();

        data.product.forEach(element => {
            cy.addToCart(element);
        });
        let checkoutCount;
        productPage.getCheckoutButton().then((ele) => {
            checkoutCount = ele.text().match(/\d+/g);
            cy.log(checkoutCount);
        })

        // Trigger API is used to trigger unique mouse events
        // Refer https://docs.cypress.io/api/commands/trigger#Mouse-Events

        productPage.getCheckoutButton().click();
        let productTotal = 0, checkoutTotal = 0;
        checkoutPage.getProductTotalElements().each(($el, index, list) => {

            productTotal = Number(productTotal) + parseInt($el.text().match(/\d+/g)[0]);

        }).then(() => {

            cy.log('productTotal: ' + productTotal);

        })

        checkoutPage.getCheckoutTotalElement().then((ele => {
            checkoutTotal = Number(ele.text().match(/\d+/g));
            cy.log(productTotal);
            cy.log(checkoutTotal);

            expect(productTotal).to.equal(checkoutTotal);
        }))

        checkoutPage.getCheckoutButton().click();
        checkoutPage.getCountryEdit().type(data.country);
        cy.wait(5000);
        checkoutPage.getCountryDropDown(data.country).click();
        cy.wait(1000);
        checkoutPage.getTermsConditionsCheckBox().click();
        checkoutPage.getPurchaseButton().click();
        // 1st Method to verify text shown below:
        //checkoutPage.getSuccessMessage().should('include.text','Success! Thank you! Your order will be delivered in next few weeks :-).');

        // 2nd method to verify text below:
        checkoutPage.getSuccessMessage().then((ele) => {
            const actualText = ele.text();
            expect(actualText.includes('Success')).to.be.true;
        })
    })



})