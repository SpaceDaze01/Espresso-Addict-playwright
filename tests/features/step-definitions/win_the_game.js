// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from 'chai';
// import { navigateTo, getWhereIAm, getMenuChoiceElement, getAllCurrentMenuChoices, checkIfDescriptionContainsString, cheatIfNeeded } from './helpers.js'
// // import { By, until, Key } from 'selenium-webdriver';

// Given('that I have started the game by navigating to {string}', async function (url) {
//   await this.gotoUrl(url);
//   // Important: wait for the relevant DOM element(s) to exist
//   // - we should choose to wait for an element we expect to only be in the DOM
//   //   with correct content/text to verify that the app has fully loaded
//   await this.getByXPathWait('/descendant::*[@class="health"]//*[contains(text(), "50")]', 1000);
//   await this.getWait('.choices ul li:nth-child(2)', 1000);
// });

// // Check the value of health, money, and espresso shots
// Then('the value of my {string} should be {float}', async function (statusType, expectedNumValue) {
//   // Create CSS selector for the status type
//   const cssSelector = `.${statusType.toLowerCase() === 'espressos' ? 'espressocups' : statusType.toLowerCase()} .progress`;

//   // Get the text content and parse it as a float
//   const numValue = parseFloat(await this.page.locator(cssSelector).textContent());

//   // Verify the value is correct
//   expect(numValue).to.equal(expectedNumValue);
// });

// // Check the contents of the hipster bag
// Then('my hipster bag should contain {string}', async function (expectedBagContent) {
//   // Get the bag content and trim whitespace
//   const bagContent = (await this.page.locator('.bag-content').textContent()).trim();

//   // Verify the bag content is correct
//   expect(bagContent).to.equal(expectedBagContent);
// });

// Given('that my position is {string}', async function (position) {
//   expect(await getWhereIAm(this)).to.equal(position);
// });

// Given('that I make the choice to {string}', async function (BtnChoice) {
//   let ButtonChoice = await getMenuChoiceElement(this, BtnChoice);
//   await ButtonChoice.click();
// });

// Then('my position should be {string}', async function (location) {
//   expect(await getWhereIAm(this)).to.equal(location);
// });

// Given('that I know my current health', async function (healthBar) {
//   await this.getByXPathWait('/descendant::*[@class="health"]', 1000);
//   await checkIfDescriptionContainsString(this, healthBar, true);
// });

// When('I wait for the event {string} to take place', async function (event) {
//   while (!await checkIfDescriptionContainsString(this, event, true)) {

//     await cheatIfNeeded(this);

//     let waitButton = await getMenuChoiceElement(this, 'Wait');
//     await waitButton.click();
//   }
// });

// Then('my health should be {string}', async function (healthPoints) {
//   await checkIfDescriptionContainsString(this, healthPoints, true);
// });

// Given('that I know my current menu choices', async function () {
//   await getAllCurrentMenuChoices(this);
// });

// Then('I should be given the new choice {string}', async function (newChoice) {
//   await getMenuChoiceElement(this, newChoice)
// });