
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
    this.firstName = page.getByTestId('firstName');
    this.lastName = page.getByTestId('lastName');
    this.postalCode = page.getByTestId('postalCode');
    this.continueButton = page.getByTestId('continue');
  }

  async fillCustomerInfo(first: string, last: string, zip: string) {
    await expect(this.titleStepOne).toBeVisible();
    await this.firstName.fill('Mulalo');
    await this.lastName.fill('Mulaudzi');
    await this.postalCode.fill('2000');
    await this.safeClick(this.continueButton);
  }
}
``
