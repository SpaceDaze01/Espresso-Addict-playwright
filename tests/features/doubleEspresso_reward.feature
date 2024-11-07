Feature: Get a double espresso as a reward from barista
  As a player I want the bartender to give me a beer
  so that I can use that later to get a double espresso from tha barista

  Scenario: Get a double espresso from the barista
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "in a crowded bar"
    And that my position is "in a crowded bar"
    When the user waits long enough for the description to contain the text "The bartender offers you a can of beer for free"
    Then my hipster bag should contain "a can of beer"
    And the user should go back to the cafe
    And wait in the cafe until they hear the conversation the barista is having on the phone about "I just want a beer"
    And user "give can of beer" to the barista
    And user gets a "double espresso" as a reward




