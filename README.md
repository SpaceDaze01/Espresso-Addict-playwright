# Playwright-Cucumber-e2e-test-example
 And example of using Playwright + Cucumber for e2e-testing including GitHub Actions-workflow (+ Selenium Webdriver for a comparison)

# Espresso Addict
Espresso Addict is an engaging text adventure game built in JavaScript where the mission is to collect 5 espressos to win. Players navigate through various scenes, needing to maintain their health, money and items while making important decisions. With it's simple design the game invites players to carefully consider their strategies in each scenario while trying to collect espressos.

# Tests to do
npx playwright install (to run tests).
Test with different sites: firefox, chromium etc..
Use different comands to run tests (npm run test-chromium,npm run test-webkit).
Note! Those can vary depending on which website you choose from using in your testing.

# Tests done
We have done 23 tests but win the game is not completed.

# Problems
We had issues with finding some elements when we did our tests. We received error messages that there were errors with Hooks.js and Helpers.js.
Sometimes we had problems reusing code in our tests. Uncommented tests in win the game are tests that we have not been able to solve.
Due to lack of time, we only had time to do one test on how to win the game...