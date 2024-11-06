Feature: Win the game through actions in the cafe and various locations
  As a user, I want to navigate through various locations, buy espressos, perform tasks, and eventually win the game by interacting with the barista and giving them a beer.

  # Scenario 1: Enter the cafe and buy 2 espressos
  Scenario: Enter the cafe and buy 2 espressos
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "outside the cafe"
    And that my position is "outside the cafe"
    When I "Enter the cafe"
    And I buy 2 espressos at once
    Then my money should be 0
    And my espressos should be 2

  # Scenario 2: Exit the cafe and go south and west
  Scenario: Exit the cafe and go south and west
    Given that I have entered the cafe and bought 2 espressos
    When I "Exit the cafe"
    And I "Go south"
    And I "Go west"
    Then my position should be "outside the cafe"

  # Scenario 3: Wait for the event "Jam with the band" and earn money
  Scenario: Wait for the event "Jam with the band" and earn money
    Given that I have exited the cafe and gone south and west
    When I wait until the event "Jam with the band" appears
    Then my money should be 5

  # Scenario 4: Enter the cafe again, buy an espresso, and wait for barista's conversation
  Scenario: Enter the cafe, buy an espresso, and wait for barista's conversation
    Given that I have earned money by jamming with the band
    When I "Go east"
    And I "Go north"
    And I "Enter the cafe"
    And I "Buy an espresso"
    And I wait until I hear a conversation from the barista
    Then my money should be 0
    And my espressos should be 3

  # Scenario 5: Exit the cafe and go to a crowded bar
  Scenario: Exit the cafe and go to a crowded bar
    Given that I have bought an espresso "inside the cafe"
    When I "Exit the cafe"
    And I "Go north"
    And I "Go east"
    Then my position should be "in a crowded bar"

  # Scenario 6: Wait for the event "Can of beer" and collect beer
  Scenario: Wait for the event "Can of beer" and collect beer
    Given that I am in a crowded bar
    When I wait until I get "a can of beer"
    Then my hipster bag should contain "a can of beer"

  # Scenario 7: Go to the cafe, give beer to barista, and win the game
  Scenario: Go to the cafe, give beer to barista, and win the game
    Given that I have "a can of beer" in my hipster bag
    When I "Go west"
    And I "Go south"
    And I "Enter the cafe"
    And I "Give beer to barista"
    Then I should win the game
    And I should be given the new choice "Play again"


Examples:
    | buttons | 
    | Value   |
    | Value   |
    | Value   |

# for different buttons