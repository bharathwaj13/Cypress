import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../support/pages/HomePage';
import ProductPage from '../../../../support/pages/ProductPage';
import CheckoutPage from '../../../../support/pages/CheckoutPage';

const productPage = new ProductPage();
const homePage = new HomePage();
const checkoutPage = new CheckoutPage();
let name;

Given('I open ecommerce page', () => {
    cy.visit(Cypress.env('url') + "angularpractice/");
})


When('I add items to cart', function () {
    homePage.getShopLink().click();

    this.data.product.forEach(element => {
        cy.addToCart(element);
    });
    let checkoutCount;
    productPage.getCheckoutButton().then((ele) => {
        checkoutCount = ele.text().match(/\d+/g);
        cy.log(checkoutCount);
    })

    productPage.getCheckoutButton().click();
})

And('Validate the Total prices', () => {
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

    Then('Select the country , Submit and verify Thank you', function () {
        checkoutPage.getCheckoutButton().click();
        checkoutPage.getCountryEdit().type(this.data.country);
        cy.wait(5000);
        checkoutPage.getCountryDropDown(this.data.country).click();
        cy.wait(1000);
        checkoutPage.getTermsConditionsCheckBox().click();
        checkoutPage.getPurchaseButton().click();
        checkoutPage.getSuccessMessage().should('include.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).');
    })
})

When('I fill the form details', function (dataTable) {
    name = dataTable.rawTable[1][0];
    homePage.getNameEdit().type(dataTable.rawTable[1][0]);
    homePage.getGenderSelect().select(dataTable.rawTable[1][1]);
})

Then('Validate the forms behaviour', function () {
    homePage.getTwoWayBindingEdit().should('have.value', name);
    homePage.getNameEdit().should('have.attr', 'minlength', '2');
    homePage.getEntrepeunerRadio().should('be.disabled');
})

And('Select the Shop page', function () {
    homePage.getShopLink().click();
})