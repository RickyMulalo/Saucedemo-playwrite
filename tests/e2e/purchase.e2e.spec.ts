
import { test, expect } from '../../fixtures/auth.fixture';
import { InventoryPage } from '../../pages/products.page';
import { CartPage } from '../../pages/yourCart.page';
import { OverviewPage } from '../../pages/overview';
import {CheckoutPage} from '../../pages/checkout';

test.describe('SauceDemo E2E - Purchase Flow', () => {
  test('User can complete a full purchase', async ({ loggedInInventory }) => {
    // Add item
    const items = ['Sauce Labs Backpack'];
    for (const item of items) {
      await loggedInInventory.addItemByName(item);
    }
    // Go to cart and assert contents
    await loggedInInventory.gotoCart();

    const cart = new CartPage(loggedInInventory.page);
    await cart.assertLoaded();
    

    // Checkout step one (Your Information)
    await cart.checkout();
    const checkout = new CheckoutPage(loggedInInventory.page);
    await checkout.fillCustomerInfo('Mulalo', 'Mulaudzi', 'fire');

    // Overview step (finish + assert success)
    const overview = new OverviewPage(loggedInInventory.page);
    await overview.confirmPurchase();
  });
});
``
