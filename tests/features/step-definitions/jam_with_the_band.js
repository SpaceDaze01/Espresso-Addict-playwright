
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { navigateTo, getWhereIAm, getMenuChoiceElement, checkIfDescriptionContainsString, cheatIfNeeded } from './helpers.js'


Given('that I have started the game by navigating to {string}', async function (url) {

  await this.gotoUrl(url);

});
Given('the user travel to location {string}', async function (toLocation) {
  await navigateTo(this, toLocation);
});
Given('that the user is located {string}', async function (position) {
  expect(await getWhereIAm(this)).to.equal(position);


});

When('the user wait long enough until this text display {string}', async function (textDisplay) {
  while (!await checkIfDescriptionContainsString(this, textDisplay, true)) {

    await cheatIfNeeded(this);

    let waitButton = await getMenuChoiceElement(this, 'Wait');
    await waitButton.click();
  }

});

Then('the user should have a choice to {string}', async function (JamWithTheBand) {
  let JamButton = await getMenuChoiceElement(this, JamWithTheBand);
  await JamButton.click();
}); 