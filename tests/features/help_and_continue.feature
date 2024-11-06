Feature: Help and continue

    As a user I want to be able to choose the help button and go back to where I was before when i'm done with reading.

    Scenario: continue after reading instructions in the help section
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "outside the cafe"
    And that my position is "outside the cafe"
    When the user clicks on the Help button
    And the user should be able to go back where they were before by clicking on the "Continue" button
    Then the user should be able to visit all possible locations without dying



    



