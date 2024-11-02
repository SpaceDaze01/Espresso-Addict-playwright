Feature: Help and continue

    As a user I want to be able to choose the help button and go back to where I was before when i'm done with reading.

    Scenario: continue after reading instructions in the help section
    Given that the user is on the main page "<localhost>"
    When the user clicks on the "Help" button
    And should contain the following text "You're a hipster."
    Then the user should be able to go back where they were before by clicking on the "Continue" button



    Examples:
      | localhost             |                                                                                                                                                                                                                                                                                                                         
      | http://localhost:3000 | 



      