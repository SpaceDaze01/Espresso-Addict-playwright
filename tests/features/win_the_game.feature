Feature: Win the game through actions in the cafe and various locations
  As a user, I want to navigate through various locations, buy espressos, perform tasks, and eventually win the game by interacting with the barista and giving them a beer.

  # Scenario 1: Enter the cafe and buy 2 espressos
  Scenario: Enter the cafe and buy 2 espressos
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "outside the cafe"
    And that my position is "outside the cafe" 
    When I "<interactions>"
    And I buy 2 espressos at once
    Then my "<MoneyBar>" should be 0 coins
    And my "<EspressoBar>" should be 2

  # Scenario 2: Exit the cafe and go south and west
  Scenario: Exit the cafe and go south and west
    Given that I have entered the cafe and bought 2 espressos
    When I "<interactions>"
    And I go "<directions>"
    And I go "<directions>"
    Then my position should be "outside the cafe" 

  # Scenario 3: Wait for the event "Jam with the band" and earn money
  Scenario: Wait for the event "Jam with the band" and earn money
    Given that I have exited the cafe and gone south and west
    When I wait until the event "<interactions>" appears
    Then my "<MoneyBar>" should be 5 coins

  # Scenario 4: Enter the cafe again, buy an espresso, and wait for barista's conversation
  Scenario: Enter the cafe, buy an espresso, and wait for barista's conversation
    Given that I have earned money by jamming with the band
    When I go "<directions>"
    And I go "<directions>"
    And I "<interactions>"
    And I "<interactions>"
    And wait in the cafe until they hear the conversation the barista is having on the phone
    Then my "<MoneyBar>" should be 0 coins
    And my "<EspressoBar>" should be 3

  # Scenario 5: Exit the cafe and go to a crowded bar
  Scenario: Exit the cafe and go to a crowded bar
    Given that my location is "inside the cafe" 
    When I "<interactions>"
    And I go "<directions>"
    And I go "<directions>"
    Then my location should be "in a crowded bar" 

  # Scenario 6: Wait for the event "Can of beer" and collect beer
  Scenario: Wait for the event "Can of beer" and collect beer
    Given that I am "in a crowded bar" 
    When the user waits long enough for the bartender to give a beer
    Then my hipster bag should include "a can of beer" 

  # Scenario 7: Go to the cafe, give beer to barista, and win the game
  Scenario: Go to the cafe, give beer to barista, and win the game
    Given that I have "<beverage>" in my hipster bag
    When I go "<directions>"
    And I go "<directions>"
    And I "<interactions>"
    And I "<interactions>"
    Then I should win the game
    And I should be given the new choice "<interactions>"


    Examples:
      | directions | interactions         | MoneyBar | EspressoBar  | beverage      |
      | Go south   | Enter the cafe       | Money    | espressoCups | a can of beer |
      | Go west    | Exit the cafe        |          |              |               |
      | Go east    | Jam with the band    |          |              |               |
      | Go north   | Give beer to barista |          |              |               |
      |            | Buy an espresso      |          |              |               |
      |            | Play again           |          |              |               |
# for different buttons