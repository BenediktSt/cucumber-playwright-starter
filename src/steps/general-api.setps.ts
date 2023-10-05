import { ICustomWorld } from '../support/custom-world';
import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('ich den Request absende', async function (this: ICustomWorld) {
  this.requestResponse = await this.requestContext?.get(this.requestPath!, {
    params: this.requestParams,
  });
});

Then(
  'erwarte ich "{}" als content-type in der API-Antwort',
  async function (this: ICustomWorld, expectedContentType: number) {
    const headers = this.requestResponse?.headers();
    expect(headers!['content-type']).toEqual(expectedContentType);
  },
);

Then(
  'erwarte ich einen sicheren x-frame-options Header in der API-Antwort',
  async function (this: ICustomWorld) {
    const xFrameHeader = this.requestResponse?.headers()['x-frame-options'];
    expect(xFrameHeader).toBeTruthy();
    expect(xFrameHeader?.toLowerCase()).toMatch(/^deny$|^sameorigin$/);
  },
);

Then('erwarte ich keine Server-Details in der API-Antwort', async function (this: ICustomWorld) {
  const serverHeader = this.requestResponse?.headers()['server'];
  if (!serverHeader) {
    // Wenn der Header nicht gesetzt wird, werden keine Informationen preisgegeben, daher ist der Test erfolgreich
    expect(serverHeader).toBeUndefined();
    return;
  }
  expect(serverHeader.toLowerCase()).not.toMatch(/nginx|tomcat/);
});

Then(
  'erwarte ich einen sicheren cache-control Header in der API-Antwort',
  async function (this: ICustomWorld) {
    const cacheControlHeader = this.requestResponse?.headers()['cache-control'];
    expect(cacheControlHeader).toBeTruthy();
    expect(cacheControlHeader?.toLowerCase()).toEqual('no-store');
  },
);

Then(
  'erwarte ich einen sicheren content-security-policy Header in der API-Antwort',
  async function (this: ICustomWorld) {
    const CSPHeader = this.requestResponse?.headers()['content-security-policy'];
    expect(CSPHeader).toBeTruthy();
    expect(CSPHeader?.toLowerCase()).toEqual("default-src 'none'; frame-ancestors 'none';");
  },
);

Then(
  'erwarte ich einen sicheren strict-transport-security Header in der API-Antwort',
  async function (this: ICustomWorld) {
    const strictTransportSecurityHeader =
      this.requestResponse?.headers()['strict-transport-security'];
    expect(strictTransportSecurityHeader).toBeTruthy();
    expect(strictTransportSecurityHeader?.toLowerCase()).toEqual('max-age=51536000; subdomains');
  },
);

Then(
  'erwarte ich einen sicheren feature-policy Header in der API-Antwort',
  async function (this: ICustomWorld) {
    const featurePolicyHeader = this.requestResponse?.headers()['feature-policy'];
    expect(featurePolicyHeader).toBeTruthy();
    expect(featurePolicyHeader?.toLowerCase()).toEqual('none');
  },
);

Then(
  'erwarte ich einen sicheren referrer-policy Header in der API-Antwort',
  async function (this: ICustomWorld) {
    const referrerPolicyHeader = this.requestResponse?.headers()['referrer-policy'];
    expect(referrerPolicyHeader).toBeTruthy();
    expect(referrerPolicyHeader?.toLowerCase()).toEqual('no-referrer');
  },
);

Then(
  'erwarte ich einen sicheren x-content-type-option Header in der API-Antwort',
  async function (this: ICustomWorld) {
    const referrerPolicyHeader = this.requestResponse?.headers()['x-content-type-option'];
    expect(referrerPolicyHeader).toBeTruthy();
    expect(referrerPolicyHeader?.toLowerCase()).toEqual('nosniff');
  },
);
