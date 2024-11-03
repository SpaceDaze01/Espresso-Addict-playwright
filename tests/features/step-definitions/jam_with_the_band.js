
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { navigateTo, getWhereIAm, getMenuChoiceElement, checkIfDescriptionContainsString, cheatIfNeeded } from './helpers.js'


Given('that I have started the game by navigating to {string}', async function (url) {

  await this.gotoUrl(url);

});

Given('the user travels to {string}', async function (to) {

  await navigateTo(this, to);
  // await new Promise(resolve => setTimeout(resolve, 3000)); // Delay for 10 seconds
});

When('I wait long enough', async function (event) {
  while (!await checkIfDescriptionContainsString(this, event, true)) {

    await cheatIfNeeded(this);

    let waitButton = await getMenuChoiceElement(this, 'Wait');
    await waitButton.click();
  }
});

Then('I should be given a choice to jam with the band', async function () {
  // TODO: implement step
});

Then('I should be able to jam with the band', async function () {
  // TODO: implement step
});