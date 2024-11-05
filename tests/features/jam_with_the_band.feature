Feature: Jam with the band
  As a user I should be able to jam with the band

  Scenario: I shuld be able to jam with the band
    Given that I have started the game by navigating to "http://localhost:3000"
    And the user navigated to "<location>"
    And the user is located "<location>"

    When the user wait long enough until this text display "You look like a hip kid, why don't come on up and jam with us?"
    Then the user should have a choice to "Jam with the band"

    Examples:
      | location       |
      | at the concert |