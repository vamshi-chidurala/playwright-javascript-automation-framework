export class SignupLoginPage {
  constructor(page) {
    this.page = page;
    this.signupName = page.locator('[data-qa="signup-name"]');
    this.signupEmail = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
  }

  async open() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await this.page.getByRole('link', { name: /signup\s*\/\s*login/i }).waitFor();
  }

  async clickSignupLogin() {
    await this.page.getByRole('link', { name: /signup\s*\/\s*login/i }).click();
  }

  async startSignup(name, email) {
    await this.signupName.fill(name);
    await this.signupEmail.fill(email);
    await this.signupButton.click();
  }
}
