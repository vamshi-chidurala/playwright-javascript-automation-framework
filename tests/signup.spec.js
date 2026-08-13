import { test, expect } from '@playwright/test';
import { SignupLoginPage } from '../pages/SignupLoginPage.js';
import { NewSignupPage } from '../pages/NewSignupPage.js';
import { createRegistrationData } from '../data/userData.js';

test('new user can create an account', async ({ page }) => {
  test.setTimeout(60_000);
  const signupLoginPage = new SignupLoginPage(page);
  const newSignupPage = new NewSignupPage(page);
  const user = createRegistrationData();

  await test.step('Open the sign-up page and register a new email address', async () => {
    await signupLoginPage.open();
    await signupLoginPage.clickSignupLogin();
    await signupLoginPage.startSignup(user.name, user.email);
  });

  await expect(page.getByText('Enter Account Information')).toBeVisible();

  await test.step('Complete the registration form', async () => {
    await newSignupPage.createAccount(user);
  });

  await expect(page.getByText('Account Created!')).toBeVisible();
});
