import { ICustomWorld } from '../support/custom-world';
import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

const CALCULATOR_URL = 'https://testsheepnz.github.io/BasicCalculator.html';

Given('ein Taschenrechner', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.goto(CALCULATOR_URL);
});

Given(
  'die addierten Zahlen {} und {}',
  async function (this: ICustomWorld, firstNumber: string, secondNumber: string) {
    const calculator = this.calculator!;
    await calculator.setFirstNumber(firstNumber);
    await calculator.setSecondNumber(secondNumber);
    await calculator.selectOperation('Addition');
    await calculator.calculateResult();
  },
);

When('ich den Taschenrechner öffne', async function (this: ICustomWorld) {
  await this.page?.goto(CALCULATOR_URL);
});

When('ich als erste Zahl {} eingebe', async function (this: ICustomWorld, firstNumber: string) {
  await this.calculator?.setFirstNumber(firstNumber);
});

When('ich als zweite Zahl {} eingebe', async function (this: ICustomWorld, secondNumber: string) {
  await this.calculator?.setSecondNumber(secondNumber);
});

When('ich {} als Operation auswähle', async function (this: ICustomWorld, operation: string) {
  await this.calculator?.selectOperation(operation);
});

When('ich das Ergebnis berechne', async function (this: ICustomWorld) {
  await this.calculator?.calculateResult();
});

When('ich das Ergebnis runde', async function (this: ICustomWorld) {
  await this.calculator?.RoundResult();
});

Then('erwarte ich {} als Ergebnis', async function (this: ICustomWorld, expectedResult: string) {
  const actualText = await this.calculator?.getResult();
  expect(actualText).toEqual(expectedResult);
});
