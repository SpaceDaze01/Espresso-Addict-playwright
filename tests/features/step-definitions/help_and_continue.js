import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { navigateTo, getWhereIAm, checkIfDescriptionContainsString, getMenuChoiceElement, cheatIfNeeded } from './helpers.js';

When('the user clicks on the Help button', async function () {
  // Ensure user hasn't died before interacting with the help menu
  let currentLocation = await getWhereIAm(this);
  expect(currentLocation).to.not.equal('I died', 'User cannot click Help after dying');

  // Check that the Help option is available and click it
  let helpElement = await getMenuChoiceElement(this, 'Help');
  await helpElement.click();

  // Wait for the Help page to load and then go back to the previous location by clicking "Continue"
  let continueElement = await getMenuChoiceElement(this, 'Continue');
  await continueElement.click();
});

Then('the user should be able to go back where they were before by clicking on the {string} button', async function (continueBtn) {
  // Store the location before Help was clicked
  let initialLocation = await getWhereIAm(this);

  // Click on the Help button, check if the user is sent to the Help page, and then click Continue
  let helpElement = await getMenuChoiceElement(this, 'Help');
  await helpElement.click();

  let continueElement = await getMenuChoiceElement(this, continueBtn);
  await continueElement.click();

  // After clicking continue, verify that the user is taken back to their initial location
  let finalLocation = await getWhereIAm(this);
  expect(finalLocation).to.equal(initialLocation, 'User should return to their previous location after clicking Continue');
});

Then('the user should be able to visit all possible locations without dying', async function () {
  // List all possible locations the user can visit
  let locations = [
    'outside the cafe',
    'inside the cafe',
    'on an empty street',
    'in a crowded bar',
    'in the country-side',
    'at the concert'
  ];

  // Loop through each location and navigate to it, ensuring no "I died" state
  for (let location of locations) {
    // Ensure health is adequate before navigating
    await cheatIfNeeded(this);

    // Navigate to each location
    await navigateTo(this, location);

    // Verify that the description contains some expected text for each location
    await checkIfDescriptionContainsString(this, location, true);
  }
});
