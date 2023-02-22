import { ICustomWorld } from '../support/custom-world';
import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('ein Taschenrechner', async function (this: ICustomWorld) {
  // Beispiel für Variante 1, um an 'page' zu gelangen
  const { page } = this;
  await page?.goto('https://testsheepnz.github.io/BasicCalculator.html');
});

Given(
  'die addierten Zahlen {} und {}',
  async function (this: ICustomWorld, firstNumber: string, secondNumber: string) {
    const page = this.page!;
    await page.locator('input#number1Field').type(firstNumber.toString());
    await page.locator('input#number2Field').type(secondNumber);
    await page.locator('select#selectOperationDropdown').selectOption('0');
    await page.locator('input#calculateButton').click();
  },
);

When('ich als erste Zahl {} eingebe', async function (this: ICustomWorld, firstNumber: string) {
  // Präferierte Variante 2, um an 'page' zu gelangen
  const page = this.page!;
  await page.locator('input#number1Field').type(firstNumber.toString());
});

When('ich als zweite Zahl {} eingebe', async function (this: ICustomWorld, secondNumber: string) {
  const page = this.page!;
  await page.locator('input#number2Field').type(secondNumber);
});

When('ich Addition als Operation auswähle', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('select#selectOperationDropdown').selectOption('0');
});

When('ich Subtraktion als Operation auswähle', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('select#selectOperationDropdown').selectOption('1');
});

When('ich das Ergebnis berechne', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('input#calculateButton').click();
});

When('ich das Ergebnis runde', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('input#integerSelect').click();
});

Then('erwarte ich {} als Ergebnis', async function (this: ICustomWorld, expectedResult: string) {
  const page = this.page!;
  const actualText = await page.locator('#numberAnswerField').inputValue();
  expect(actualText).toEqual(expectedResult);
});
