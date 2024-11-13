
import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import {
  getMenuChoiceElement,
  checkIfDescriptionContainsString,
  cheatIfNeeded
} from './helpers.js';

When('I wait long enough for the description to contain the text {string}', async function (partOfDescription) {

  while (!await checkIfDescriptionContainsString(this, partOfDescription, true)) {
    
    
    await cheatIfNeeded(this);
    
    let waitButton = await getMenuChoiceElement(this, 'Wait');
    await waitButton.click();
  }
});

Then('my hipster bag should contain {string}', async function (thing) {
  
  let textInBag = await this.getText(await this.get('.bag-content'));
  
  expect(textInBag).to.contain(thing);
});