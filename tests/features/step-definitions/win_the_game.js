// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from 'chai';
// import { navigateTo, getWhereIAm, getMenuChoiceElement, checkIfDescriptionContainsString, getAllCurrentMenuChoices, cheatIfNeeded } from './helpers.js'


// Given('that I have started the game by navigating to {string}', async function (url) {
//   await this.driver.get(url);
//   await this.getByXPathWait('/descendant::*[@class="health"]//*[contains(text(), "50")]');
// });

// Then('the value of my {string} should be {float}', async function (statusType, expectedNumValue) {
//   let cssSelector = '.' + statusType.toLowerCase();
//   if (cssSelector === '.espressos') { cssSelector = '.espressocups'; }

//   cssSelector += ' .progress';

//   let element = await this.get(cssSelector);
//   let numValue = +(await element.getText());

//   expect(numValue).to.equal(expectedNumValue);
// });

// Then('my hipster bag should contain {string}', async function (expectedBagContent) {
//   let bagElement = await this.get('.bag-content');
//   let bagContent = (await bagElement.getText()).trim();

//   expect(bagContent).to.equal(expectedBagContent);
// });

// Given('that my position is {string}', async function (position) {
//   expect(await getWhereIAm(this)).to.equal(position);
// });

// Given('that I make the choice to {string}', async function (choiceText) {
//   let { choiceElements, choices } = await getAllCurrentMenuChoices(this);
//   expect(choices).to.contain(choiceText);
//   let index = choices.indexOf(choiceText);
//   await choiceElements[index].click();
// });

// Then('my position should be {string}', async function (expectedPosition) {
//   await navigateTo(this, expectedPosition);
//   expect(await getWhereIAm(this)).to.equal(expectedPosition);
// });

// Given('that I know my current health', async function () {
//   let healthElement = await this.get('.health .progress');
//   let currentHealth = +(await healthElement.getText());
//   this.currentHealth = currentHealth;

// });

// When('I wait for the event {string} to take place', async function (event) {

//   let isEventDescriptionCorrect
//   while (!isEventDescriptionCorrect) {
//     isEventDescriptionCorrect = await checkIfDescriptionContainsString(this, event, true);
//     let choiceElement = await getMenuChoiceElement(this, 'Wait');
//     await choiceElement.click();
//   }
//   expect(isEventDescriptionCorrect).to.be.true;
// });

// Then('my health should be {string}', async function (expectedHealth) {

//   let healthElement = await this.get('.health .progress');
//   let currentHealth = +(await healthElement.getText());

//   if (expectedHealth === 'less or same as before') {
//     await cheatIfNeeded(this);
//     expect(currentHealth).to.be.most(this.currentHealth);
//     return
//   }
//   if (expectedHealth === 'unchanged') {
//     await cheatIfNeeded(this);
//     expect(currentHealth).to.equal(this.currentHealth);
//     return
//   }
//   if (expectedHealth === '20 more than before') {
//     await cheatIfNeeded(this);
//     expect(currentHealth).to.equal(this.currentHealth + 20);
//     return
//   }
//   if (expectedHealth === '10 more than before') {
//     await cheatIfNeeded(this);
//     expect(currentHealth).to.equal(this.currentHealth + 10);
//     return
//   }
//   expect(currentHealth).to.equal(expectedHealth);
// });

// Given('that I know my current menu choices', async function () {
//   let menuChoices = await getAllCurrentMenuChoices(this);
//   this.currentMenuChoices = menuChoices;
// });

// Then('I should be given the new choice {string}', async function (newChoice) {
//   let choiceElement = await getMenuChoiceElement(this, newChoice);
//   await choiceElement.click();
// });