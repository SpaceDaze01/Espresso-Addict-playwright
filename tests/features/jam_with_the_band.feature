Feature: Jam with the band
  As a user I should be able to jam with the band

  Scenario: I shuld be able to jam with the band
    Given that I have started the game by navigating to "http://localhost:3000"
    And the user travels to "<location>"

    When I wait long enough "in the country-side"
    Then I should be given a choice to jam with the band
    And I should be able to jam with the band

    Examples:
      | location            |
      | in the country-side |
