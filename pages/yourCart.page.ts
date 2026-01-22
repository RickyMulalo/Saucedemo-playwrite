
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  readonly title: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByText('Your Cart', { exact: true });
    this.checkoutButton = page.getByTestId('checkout');
  }

  async assertLoaded() {
    await expect(this.title).toBeVisible();
  }

  async checkout() {
    await this.safeClick(this.checkoutButton);
  }
}
