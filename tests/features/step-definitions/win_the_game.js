
import { Given, When, Then } from '@cucumber/cucumber';
import { navigateTo, getWhereIAm, getMenuChoiceElement, checkIfDescriptionContainsString, getAllCurrentMenuChoices, cheatIfNeeded } from './helpers.js'
import { expect } from 'chai';

When('I {string}', async function(interaction){
  let menuChoices = await getAllCurrentMenuChoices(this, interaction);
  this.currentMenuChoices = menuChoices;
});

// When('I click {string} twice', async function(buyEspresso){
//   let buyButton = await getMenuChoiceElement(this, buyEspresso);
//   await buyButton.click();
//   await buyButton.click();
// });

// Then('my {string} should show {float} coins', async function(MoneyBar, a){
//   // TODO: implement step
// });

// Then('my {string} should show {float} espressos', async function(EspressoBar, a){
//   // TODO: implement step
// });

// Given('that I have entered the cafe and bought {float} espressos', async function(a){
//   // TODO: implement step
// });

// When('I {string}', async function(a){
//   // TODO: implement step
// });

When('I go {string}', async function(directions){
  await getAllCurrentMenuChoices(this, directions);
});

// When('I go {string}', async function(GoWest){
//   // TODO: implement step
// });

Given('that I have exited the cafe and gone south and west', async function(){
  let southButton = await getMenuChoiceElement(this, 'Go south');
  await southButton.click();
  
  let westButton = await getMenuChoiceElement(this, 'Go west');
  await westButton.click();
});

When('I wait until the event {string} appears', async function(interactions){
  while (!await getAllCurrentMenuChoices(this, interactions, true)) {
    
    await cheatIfNeeded(this);
    
    let waitButton = await getMenuChoiceElement(this, 'Wait');
    await waitButton.click();
  }
});

// Then('my {string} should be {float} coins', async function(MoneyBar, a){
//   // TODO: implement step
// });

// Given('that I have earned money by jamming with the band', async function(){
//   // TODO: implement step
// });

// When('I go {string}', async function(GoEast){
//   // TODO: implement step
// });

// When('I go {string}', async function(GoNorth){
//   // TODO: implement step
// });

// When('I {string}', async function(BuyEspresso){
//   // TODO: implement step
// });

// When('wait in the cafe until they hear the conversation the barista is having on the phone', async function(){
//   // TODO: implement step
// });

// Then('my {string} should be {float}', async function(EspressoBar, a){
//   // TODO: implement step
// });

Given('that my location is {string}', async function(position){
  await getWhereIAm(this, position, true)
});

// When('I {string}', async function(ExitCafe){
//   // TODO: implement step
// });

Then('my location should be {string}', async function(expectedPosition){
  await navigateTo(this, expectedPosition);
  expect(await getWhereIAm(this)).to.equal(expectedPosition);
});

Given('that I am {string}', async function(position){
  expect(await getWhereIAm(this)).to.equal(position);
});

When('the user waits long enough for the bartender to give a beer', async function(){
  while (!await checkIfDescriptionContainsString(this, 'The bartender offers you a can of beer for free', true)) {

      await cheatIfNeeded(this);

      let waitButton = await getMenuChoiceElement(this, 'Wait');
      await waitButton.click();
    }
});

Then('my hipster bag should include {string}', async function(thing){
  let textInBag = await this.getText(await this.get('.bag-content'));
  expect(textInBag).to.contain(thing);
});

Given('that I have {string} in my hipster bag', async function(beverage){
  let textInBag = await this.getText(await this.get('.bag-content'));
  expect(textInBag).to.contain(beverage); 
});

// When('I {string}', async function(GiveBeerToBarista){
//   // TODO: implement step
// });

Then('I should win the game', async function(){
  await checkIfDescriptionContainsString(this, 'You feel alive and pumping.', true)
});

Then('I should be given the new choice {string}', async function(newChoice){
  await getAllCurrentMenuChoices(this, newChoice, true);
});