import { Locator, Page } from '@playwright/test';

export class HttpApi {
  readonly page: Page;
  readonly getOperation: Locator;
  readonly tryOut: Locator;
  readonly execute: Locator;
  readonly statusCode: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getOperation = page.locator('[id="operations-HTTP Methods-get_get"]');
    this.tryOut = this.getOperation.locator('.try-out__btn');
    this.execute = this.getOperation.locator('.execute');
    this.statusCode = this.getOperation
      .locator('.responses-table')
      .first()
      .locator('tbody')
      .locator('.response-col_status');
  }

  public async openGetRequest() {
    await this.getOperation.click();
    await this.tryOut.click();
  }
  public async executeGetRequest() {
    await this.execute.click();
  }
  public async getStatusCode(): Promise<number> {
    const statusCodeText = await this.statusCode.textContent();
    return parseInt(statusCodeText!);
  }
}
