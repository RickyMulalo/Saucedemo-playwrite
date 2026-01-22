
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

const toSlug = (name: string) =>
  name.toLowerCase().replace(/ /g, '-'); // backpack -> sauce-labs-backpack// this makes locators dynamically for selecting products

export class InventoryPage extends BasePage {
  readonly title: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByText('Products', { exact: true });
    this.cartLink = page.getByTestId('shopping-cart-link');
  }

  async assertLoaded() {
    await expect(this.title).toBeVisible();
  }

  async addItemByName(productName: string) {
    const slug = toSlug(productName); // e.g. "sauce-labs-backpack"
    const button = this.page.getByTestId(`add-to-cart-${slug}`);
    await this.safeClick(button);
  }


  async gotoCart() {
    await this.safeClick(this.cartLink);
  }


}
