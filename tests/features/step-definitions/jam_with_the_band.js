
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { navigateTo, getWhereIAm, getMenuChoiceElement, checkIfDescriptionContainsString, cheatIfNeeded } from './helpers.js'




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