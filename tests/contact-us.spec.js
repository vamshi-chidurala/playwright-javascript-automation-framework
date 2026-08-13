import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../pages/ContactUsPage.js';

test('contact page displays the required input fields', async ({ page }) => {
  const contactUsPage = new ContactUsPage(page);

  await contactUsPage.open();

  await expect(contactUsPage.getInTouchHeading).toBeVisible();
  await expect(contactUsPage.nameInput).toBeVisible();
  await expect(contactUsPage.emailInput).toBeVisible();
  await expect(contactUsPage.subjectInput).toBeVisible();
  await expect(contactUsPage.messageInput).toBeVisible();
});

