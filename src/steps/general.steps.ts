import { ICustomWorld } from '../support/custom-world';
import { Given, Then } from '@cucumber/cucumber';
import { expect, Page, Response } from '@playwright/test';
import { Page as PlaywrightPage } from 'playwright-core';
import AxeBuilder from '@axe-core/playwright';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const htmlValidator = require('html-validator');

function getResponsesByHtmlRequest(responses: Response[]) {
  return responses.filter((res) => res.request().url().includes('.html'));
}

async function clearBrowserCache(page: Page) {
  await page.route('**', (route) => route.continue());
}

Given('ein aktives Monitoring der HTTP-Requests des Browsers', async function (this: ICustomWorld) {
  await clearBrowserCache(this.page!);
  this.tracedResponses = [];
  this.page?.on('response', (response) => this.tracedResponses?.push(response));
});

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

Then(
  'erwarte ich einen sicheren access-control-allow-origin Header der Web-Page',
  async function (this: ICustomWorld) {
    const relevantRequests = getResponsesByHtmlRequest(this.tracedResponses!);
    for (const entry of relevantRequests) {
      const headers = await entry.allHeaders();
      console.log(headers);
      const CORSHeader = headers['access-control-allow-origin'];
      expect(CORSHeader).toBeTruthy();
      expect(CORSHeader.toLowerCase()).toBe('https://testsheepnz.github.io/');
    }
  },
);

Then(
  'erwarte ich einen gesetzten content-security-policy Header der Web-Page',
  async function (this: ICustomWorld) {
    const relevantRequests = getResponsesByHtmlRequest(this.tracedResponses!);
    for (const entry of relevantRequests) {
      const headers = await entry.allHeaders();
      console.log(headers);
      expect(headers['content-security-policy']).toBeTruthy();
    }
  },
);

Then(
  'erwarte ich einen sicheren x-frame-options Header der Web-Page',
  async function (this: ICustomWorld) {
    const relevantRequests = getResponsesByHtmlRequest(this.tracedResponses!);
    for (const entry of relevantRequests) {
      const headers = await entry.allHeaders();
      const xFrameHeader = headers['x-frame-options'];
      expect(xFrameHeader).toBeTruthy();
      expect(xFrameHeader.toLowerCase()).toMatch(/^deny$|^sameorigin$/);
    }
  },
);
