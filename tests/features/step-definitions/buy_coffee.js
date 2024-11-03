
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { navigateTo, getWhereIAm, getMenuChoiceElement, checkIfDescriptionContainsString, cheatIfNeeded } from './helpers.js'


Given('that the user is on the game on the site {string}', async function (url) {
  await this.gotoUrl(url);
});

Given('the users current location is {string}', async function (location) {
  expect(await getWhereIAm(this)).to.equal(location);
});

When('the user {string}', async function (cafeButton) {
  let menuChoiceElement = await getMenuChoiceElement(this, cafeButton);
  await menuChoiceElement.click();
});

Then('the user should have enuough {string} to buy an espresso', async function (wealth) {
  let moneyStatus = await this.getText(await this.get('.money'));
  expect(moneyStatus).to.contain(wealth);
});

Then('user should get an {string}', async function (espressos) {
  let buyButton = await getMenuChoiceElement(this, 'Buy an espresso');
  await buyButton.click();
  let espressoStatus = await this.getText(await this.get('.espressocups'));
  expect(espressoStatus).to.contain(espressos);
});