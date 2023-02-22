import { ICustomWorld } from '../support/custom-world';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page as PlaywrightPage } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const htmlValidator = require('html-validator');
Then(
  'erwarte ich keine Barrierefreiheitsfehler auf dieser Seite',
  async function (this: ICustomWorld) {
    const page = this.page! as PlaywrightPage;
    const a11yScans = await new AxeBuilder({ page }).analyze();
    const violations = a11yScans.violations;
    if (violations) {
      this.attach(JSON.stringify(violations), 'application/json');
    }
    expect(violations.length).toEqual(0);
  },
);

Then('erwarte ich valides HTML auf dieser Seite', async function (this: ICustomWorld) {
  const page = this.page!;
  const completePageHTML = await page.content();
  const options = {
    validator: 'WHATWG',
    data: completePageHTML,
  };
  const result = await htmlValidator(options);
  if (!result.isValid) {
    this.attach(JSON.stringify(result), 'application/json');
  }
  expect(result.isValid).toBeTruthy();
});
