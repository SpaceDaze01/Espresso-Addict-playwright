
import { Given, When, Then } from '@cucumber/cucumber';
import { navigateTo, getWhereIAm, getMenuChoiceElement, checkIfDescriptionContainsString, cheatIfNeeded } from './helpers.js'
import { expect } from 'chai';

Given('that the user have started the game on the site {string}', async function(url){
  await this.gotoUrl(url);
});

Given('the user navigated to the location {string}', async function(toLocation){
  await navigateTo(this, toLocation);
});

Given('the users current position is {string}', async function(position){
  expect(await getWhereIAm(this)).to.equal(position);
});

When('the user waits long enough for the description to contain the text {string}', async function(partOfDescription){
  while (!await checkIfDescriptionContainsString(this, partOfDescription, true)) {
    
    await cheatIfNeeded(this);
    
    let waitButton = await getMenuChoiceElement(this, 'Wait');
    await waitButton.click();
  }
});

Then('my hipster bag should contain {string}', async function(item){
  let textInBag = await this.getText(await this.get('.bag-content'));
  expect(textInBag).to.contain(item);
});

Then('the user should go back to the cafe', async function(){
  let westButton = await getMenuChoiceElement(this, 'Go west');
  await westButton.click();

  let southButton = await getMenuChoiceElement(this, 'Go south');
  await southButton.click();

  let enterCafeButton = await getMenuChoiceElement(this, 'Enter the cafe');
  await enterCafeButton.click();
});

Then('wait in the cafe until they hear the conversation the barista is having on the phone about {string}', async function(partOfConversation){
  while (!await checkIfDescriptionContainsString(this, partOfConversation, true)) {

    await cheatIfNeeded(this);

    let waitButton = await getMenuChoiceElement(this, 'Wait');
    await waitButton.click();
  }
});

Then('user {string} to the barista', async function(a){
  let GiveButton = await getMenuChoiceElement(this, 'Give beer to barista');
  await GiveButton.click();
});

Then('user gets a {string} as a reward', async function(doubleEspresso){
  await checkIfDescriptionContainsString(this, doubleEspresso, true)
});