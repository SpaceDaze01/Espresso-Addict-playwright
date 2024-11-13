
import { Given, When, Then } from '@cucumber/cucumber';
import { navigateTo, getWhereIAm, getMenuChoiceElement } from './helpers.js'
import { expect } from 'chai';

Given('that I have started the game by navigating to {string}', async function (url) {
  await this.gotoUrl(url);
  
  await this.getByXPathWait('/descendant::*[@class="health"]//*[contains(text(), "50")]', 1000);
  await this.getWait('.choices ul li:nth-child(2)', 1000);
});

Given('that I navigated to the position {string}', async function (to) {
  await navigateTo(this, to);
});

Given('that my position is {string}', async function (position) {
  expect(await getWhereIAm(this)).to.equal(position);
});

When('I wait repeatedly until I die', async function () {
  
  while (await getWhereIAm(this) !== 'I died') {
    let menuChoiceElement = await getMenuChoiceElement(this, 'Wait');
    await menuChoiceElement.click();
  }
});

Then('my position should be {string}', async function (position) {
  expect(await getWhereIAm(this)).to.equal(position);
});