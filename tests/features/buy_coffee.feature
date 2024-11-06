Feature: Buy a coffee
  As a player I want to able to buy an espresso from the barista


  Scenario: Buy a coffee
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "outside the cafe"
    And that my position is "outside the cafe"
    When the user "Enter the cafe"
    Then the user should have enuough "Money" to buy an espresso
    And user should get an "Espresso"

  
