
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class OverviewPage extends BasePage {
  readonly titleStepTwo: Locator;
  readonly finishButton: Locator;
  readonly completeHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.titleStepTwo = page.getByText('Checkout: Overview', { exact: true });
    this.finishButton = page.getByTestId('finish');
    this.completeHeader = page.getByTestId('complete-header');
  }

  async confirmPurchase() {
    await expect(this.titleStepTwo).toBeVisible();
    await this.safeClick(this.finishButton);
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}
