import { ICustomWorld } from '../support/custom-world';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

Then(
  'erwarte ich keine Barrierefreiheitsfehler auf dieser Seite',
  async function (this: ICustomWorld) {
    const page = this.page!;
    const a11yScans = await new AxeBuilder({ page }).analyze();
    expect(a11yScans.violations).toEqual([]);
  },
);
