// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from 'chai';
// import { navigateTo, getWhereIAm, checkIfDescriptionContainsString, getMenuChoiceElement } from './helpers.js';

// Given('that the user is on the main page {string}', async function (localhost) {
//   await this.page.goto(localhost);
// });

// When('the user clicks on the {string} button', async function (buttonName) {
//   const currentLocation = await getWhereIAm(this);
//   expect(currentLocation).to.not.equal('I died', 'User cannot click button after dying');

//   const button = await this.page.locator(`text=${buttonName}`);
//   await button.click();
// });

// When('should contain the following text {string}', async function (partOfDescription) {
//   await checkIfDescriptionContainsString(this, partOfDescription, true)
// });

// Then('the user should be able to go back where they were before by clicking on the {string} button', async function (continueBtn) {
//   let continueButton = await getMenuChoiceElement(this, continueBtn);
//   await continueButton.click();
//   await checkIfDescriptionContainsString(this, "outside the cafe", true)
// });



