Feature: Buy a coffee
  As a player I want to able to buy an espresso from the barista


  Scenario: Buy a coffee
    Given that the user is on the game on the site "http://localhost:3000"
    And the users current location is "<location>"
    When the user "Enter the cafe"
    Then the user should have enuough "Money" to buy an espresso
    And user should get an "Espresso"

    Examples:
      | location         |
      | outside the cafe |
