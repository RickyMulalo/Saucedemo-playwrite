
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckoutPage extends BasePage {
  readonly titleStepOne: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.titleStepOne = page.getByText('Checkout: Your Information', { exact: true });
    this.firstName = page.getByTestId('first-name');
    this.lastName = page.getByTestId('last-name');
    this.postalCode = page.getByTestId('postal-code');
    this.continueButton = page.getByTestId('continue');
  }

  async fillCustomerInfo(first: string, last: string, zip: string) {
    await expect(this.titleStepOne).toBeVisible();
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
    await this.safeClick(this.continueButton);
  }
}
``
