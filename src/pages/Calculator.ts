import { Locator, Page } from '@playwright/test';

export class Calculator {
  readonly page: Page;
  private readonly firstNumber: Locator;
  private readonly secondNumber: Locator;
  private readonly operationSelection: Locator;
  private readonly calculate: Locator;
  private readonly ceil: Locator;
  private readonly result: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNumber = page.locator('input#number1Field');
    this.secondNumber = page.locator('input#number2Field');
    this.operationSelection = page.locator('select#selectOperationDropdown');
    this.calculate = page.locator('input#calculateButton');
    this.ceil = page.locator('input#integerSelect');
    this.result = page.locator('#numberAnswerField');
  }

  public async setFirstNumber(input: string) {
    await this.firstNumber.type(input);
  }
  public async setSecondNumber(input: string) {
    await this.secondNumber.type(input);
  }
  public async selectOperation(opertaion: string) {
    switch (opertaion) {
      case 'Addition':
        await this.operationSelection.selectOption('0');
        return;
      case 'Subtraktion':
        await this.operationSelection.selectOption('1');
        return;
      default:
        throw new Error('Unbekannte Operation');
    }
  }
  public async calculateResult() {
    await this.calculate.click();
  }
  public async RoundResult() {
    await this.ceil.click();
  }
  public async getResult(): Promise<string> {
    return this.result.inputValue();
  }
}
