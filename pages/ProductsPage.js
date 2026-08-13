export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.searchedProductsHeading = page.getByText('Searched Products', { exact: true });
    this.firstViewProductLink = page.locator('a[href="/product_details/1"]');
  }

  async open() {
    await this.page.goto('/products', { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await this.page.getByText('All Products', { exact: true }).waitFor();
  }

  async searchFor(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  productName(productName) {
    return this.page.locator('.features_items').getByText(productName, { exact: true }).first();
  }

  async openFirstProduct() {
    await Promise.all([
      this.page.waitForURL(/\/product_details\/1$/, { timeout: 30_000 }),
      this.firstViewProductLink.click(),
    ]);
  }
}
