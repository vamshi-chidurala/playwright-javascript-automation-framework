export class ContactUsPage {
  constructor(page) {
    this.page = page;
    this.getInTouchHeading = page.getByText('Get In Touch', { exact: true });
    this.nameInput = page.locator('[data-qa="name"]');
    this.emailInput = page.locator('[data-qa="email"]');
    this.subjectInput = page.locator('[data-qa="subject"]');
    this.messageInput = page.locator('[data-qa="message"]');
  }

  async open() {
    await this.page.goto('/contact_us', { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await this.getInTouchHeading.waitFor();
  }
}

