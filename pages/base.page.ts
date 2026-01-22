
import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Common helper: robust click with visible check
  async safeClick(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }
}
``
