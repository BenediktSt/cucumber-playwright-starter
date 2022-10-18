import { ICustomWorld } from '../support/custom-world';
import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('ein Taschenrechner', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.goto('https://testsheepnz.github.io/BasicCalculator.html');
});

When('ich als erste Zahl drei eingebe', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('input#number1Field').type('3');
});

When('ich als zweite Zahl vier eingebe', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('input#number2Field').type('4');
});

When('ich Addition als Operation auswähle', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('select#selectOperationDropdown').selectOption('0');
});

When('ich das Ergebnis berechne', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('input#calculateButton').click();
});

Then('erwarte ich sieben als Ergebnis', async function (this: ICustomWorld) {
  const page = this.page!;
  const actualText = await page.locator('#numberAnswerField').inputValue();
  expect(actualText).toEqual('7');
});
