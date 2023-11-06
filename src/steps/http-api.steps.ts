import { ICustomWorld } from '../support/custom-world';
import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

const HTTP_BIN_URL = 'https://httpbin.org';
Given('die Seite für HTTP-Tests', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.goto(`${HTTP_BIN_URL}/#/HTTP_Methods`);
});

Given('der geöffnete GET-Request', async function (this: ICustomWorld) {
  const httpApi = this.httpApi!;
  await httpApi.openGetRequest();
});

Given('ein Fehler auf dem Server', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.route(`${HTTP_BIN_URL}/get`, (route) =>
    route.fulfill({
      status: 500,
    }),
  );
});

When('ich den GET-Request ausführe', async function (this: ICustomWorld) {
  const httpApi = this.httpApi!;
  await httpApi.executeGetRequest();
});

Then(
  'erwarte ich als Status-Code {int}',
  async function (this: ICustomWorld, expectedStatusCode: number) {
    const httpApi = this.httpApi!;
    const actualStatusCode = await httpApi.getStatusCode();
    expect(actualStatusCode).toEqual(expectedStatusCode);
  },
);
