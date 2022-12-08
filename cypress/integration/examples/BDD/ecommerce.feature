Feature: End to end Ecommerce Validation

    @Regression
    Scenario: ECommerce products delivery

        Given I open ecommerce page
        When I add items to cart
        And Validate the Total prices
        Then Select the country , Submit and verify Thank you

    # Data Driven Testing using Cucumber
    @Smoke
    Scenario: Filling the form to shop
        Given I open ecommerce page
        When I fill the form details
            | name    | gender |
            | Bharath | Male   |
        Then Validate the forms behaviour
        And Select the Shop page