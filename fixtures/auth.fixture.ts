
// fixtures/auth.fixture.ts
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/products.page';
import { creds } from '../config/env';

type Fixtures = {
  /** An InventoryPage instance that is already logged in and loaded. */
  loggedInInventory: InventoryPage;
};

export const test = base.extend<Fixtures>({
  loggedInInventory: async ({ page }, use) => {
    // 1) Navigate to login
    const login = new LoginPage(page);
    await login.goto();

    // 2) Perform login with env-driven creds
    await login.login(creds.username, creds.password);

    // 3) Assert we landed on the Inventory page
    const inventory = new InventoryPage(page);
    await inventory.assertLoaded();

    // 4) Expose "inventory" to the test body
    await use(inventory);

    // 5) (optional) add any cleanup here, e.g. logout
  },
});

// Re-export expect so tests can import from this fixture file only
export { expect } from '@playwright/test';
