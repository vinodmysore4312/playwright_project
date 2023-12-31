import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import * as messages from '@cucumber/messages';
import { BrowserContext, Page, PlaywrightTestOptions, APIRequestContext } from '@playwright/test';

export interface CucumberWorldConstructorParams {
  parameters: { [key: string]: string };
}

export interface ICustomWorld extends World {
  debug: boolean;
  feature?: messages.Pickle;
  context?: BrowserContext;
  page?: Page;

  testName?: string;
  startTime?: Date;

  server?: APIRequestContext;

  playwrightOptions?: PlaywrightTestOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sharedData: Record<string, any>;
}

export class CustomWorld extends World implements ICustomWorld {
  constructor(options: IWorldOptions) {
    super(options);
  }
  debug = false;
  sharedData = {};
}

setWorldConstructor(CustomWorld);
