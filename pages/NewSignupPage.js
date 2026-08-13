export class NewSignupPage {
  constructor(page) {
    this.page = page;
    this.titleMr = page.locator('#id_gender1');
    this.password = page.locator('#password');
    this.day = page.locator('#days');
    this.month = page.locator('#months');
    this.year = page.locator('#years');
    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.company = page.locator('#company');
    this.address = page.locator('#address1');
    this.country = page.locator('#country');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.zipcode = page.locator('#zipcode');
    this.mobileNumber = page.locator('#mobile_number');
    this.createAccountButton = page.locator('[data-qa="create-account"]');
  }

  async createAccount(details) {
    await this.titleMr.check();
    await this.password.fill(details.password);
    await this.day.selectOption(details.day);
    await this.month.selectOption(details.month);
    await this.year.selectOption(details.year);
    await this.firstName.fill(details.firstName);
    await this.lastName.fill(details.lastName);
    await this.company.fill(details.company);
    await this.address.fill(details.address);
    await this.country.selectOption(details.country);
    await this.state.fill(details.state);
    await this.city.fill(details.city);
    await this.zipcode.fill(details.zipcode);
    await this.mobileNumber.fill(details.mobileNumber);
    await this.createAccountButton.click();
  }
}
