import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage.js';

test.describe('Product catalog', () => {
  test('user can search for a product', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await test.step('Open the product catalog', async () => {
      await productsPage.open();
    });

    await test.step('Search for Blue Top', async () => {
      await productsPage.searchFor('Blue Top');
    });

    await expect(productsPage.searchedProductsHeading).toBeVisible();
    await expect(productsPage.productName('Blue Top')).toBeVisible();
  });

  test('user can open a product detail page', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.open();
    await productsPage.openFirstProduct();

    await expect(page).toHaveURL(/product_details/);
    await expect(page.locator('.product-information').getByText(/Availability:/)).toBeVisible();
  });
});

