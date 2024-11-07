
import { Given, When, Then } from '@cucumber/cucumber';
import { navigateTo, getWhereIAm, getMenuChoiceElement, checkIfDescriptionContainsString, getAllCurrentMenuChoices, cheatIfNeeded } from './helpers.js'
import { expect } from 'chai';
//FIXA
When('I {string}', async function(interaction){
  if (interaction === 'Enter the cafe') {
    await page.click('button.enter-cafe');
  }
});

//fortsätt här
When('I buy {float} espressos at once', async function(quantity){
  
  });

Then('my {string} should be {float} coins', async function(MoneyBar, a){
  // TODO: implement step
});

Then('my {string} should be {float}', async function(EspressoBar, a){
  // TODO: implement step
});

Given('that I have entered the cafe and bought {float} espressos', async function(a){
  // TODO: implement step
});

When('I go {string}', async function(directions){
  // TODO: implement step
});

Given('that I have exited the cafe and gone south and west', async function(){
  // TODO: implement step
});

When('I wait until the event {string} appears', async function(interactions){
  // TODO: implement step
});

Given('that I have earned money by jamming with the band', async function(){
  // TODO: implement step
});

When('wait in the cafe until they hear the conversation the barista is having on the phone', async function(){
  // TODO: implement step
});

Given('that my location is {string}', async function(a){
  // TODO: implement step
});

Then('my location should be {string}', async function(a){
  // TODO: implement step
});

Given('that I am {string}', async function(a){
  // TODO: implement step
});

When('the user waits long enough for the bartender to give a beer', async function(){
  // TODO: implement step
});

Then('my hipster bag should include {string}', async function(a){
  // TODO: implement step
});

Given('that I have {string} in my hipster bag', async function(beverage){
  // TODO: implement step
});

Then('I should win the game', async function(){
  // TODO: implement step
});

Then('I should be given the new choice {string}', async function(interactions){
  // TODO: implement step
});