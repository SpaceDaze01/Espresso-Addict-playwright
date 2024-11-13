import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { navigateTo, getWhereIAm, checkIfDescriptionContainsString, getMenuChoiceElement, cheatIfNeeded } from './helpers.js';

When('the user clicks on the Help button', async function () {

  let currentLocation = await getWhereIAm(this);
  expect(currentLocation).to.not.equal('I died', 'User cannot click Help after dying');


  let helpElement = await getMenuChoiceElement(this, 'Help');
  await helpElement.click();


  let continueElement = await getMenuChoiceElement(this, 'Continue');
  await continueElement.click();
});

Then('the user should be able to go back where they were before by clicking on the {string} button', async function (continueBtn) {

  let initialLocation = await getWhereIAm(this);


  let helpElement = await getMenuChoiceElement(this, 'Help');
  await helpElement.click();

  let continueElement = await getMenuChoiceElement(this, continueBtn);
  await continueElement.click();


  let finalLocation = await getWhereIAm(this);
  expect(finalLocation).to.equal(initialLocation, 'User should return to their previous location after clicking Continue');
});

Then('the user should be able to visit all possible locations without dying', async function () {

  let locations = [
    'outside the cafe',
    'inside the cafe',
    'on an empty street',
    'in a crowded bar',
    'in the country-side',
    'at the concert'
  ];


  for (let location of locations) {

    await cheatIfNeeded(this);


    await navigateTo(this, location);


    await checkIfDescriptionContainsString(this, location, true);
  }
});
