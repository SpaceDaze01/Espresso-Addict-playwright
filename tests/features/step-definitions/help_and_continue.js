import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { navigateTo, getWhereIAm, checkIfDescriptionContainsString } from './helpers.js';

Given('that the user is on the main page {string}', async function (localhost) {
  await this.page.goto(localhost);
});

When('the user clicks on the {string} button', async function (buttonName) {
  const currentLocation = await getWhereIAm(this);
  expect(currentLocation).to.not.equal('I died', 'User cannot click button after dying');

  const button = await this.page.locator(`text=${buttonName}`);
  await button.click();
});

When('reads the text {string}', async function (info) {
  const containsText = await checkIfDescriptionContainsString(this, info);
  expect(containsText, `Expected description to contain: ${info}`).to.be.true;
});

Then('the user should be able to go back where they were before {string} by clicking on the {string} button', async function (outsideCafe, continueButton) {
  await this.page.locator(`text=${continueButton}`).click();
  const previousLocation = await getWhereIAm(this);
  expect(previousLocation, 'Expected to return to the previous location').to.equal(outsideCafe);
});



