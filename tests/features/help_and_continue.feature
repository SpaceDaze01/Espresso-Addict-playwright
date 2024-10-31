Feature: Help and continue

    As a user I want to be able to choose the help button and go back to where I was before when i'm done with reading.

    Scenario: continue after reading instructions in the help section
    Given that the user is on the main page "<localhost>"
    When the user clicks on the "Help" button
    And reads the text "<info>"
    Then the user should be able to go back where I they were before "<outsideCafe>" by clicking on the "Continue" button



    Examples:
      | localhost             | info                                                                                                                                                                                                                                                                                                                            | outsideCafe                                                         |
      | http://localhost:3000 | You're a hipster. And you love iThings and your cool bag. But right now you're almost broke. And that's bad. Because you're an Espresso Addict too, a caffeine junkie. You need your fix: 5 cups of espresso. Otherwise you will soon start to feel really shaky! So go get your fix... Lurk around and wait for opportunities! | You are standing outside the Cloud Forest Cafe. The sun is shining. |



      