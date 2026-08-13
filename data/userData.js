export function createRegistrationData() {
  const timestamp = Date.now();

  return {
    name: 'Playwright User',
    email: `playwright.user.${timestamp}@example.com`,
    password: 'Playwright@123',
    day: '10',
    month: '5',
    year: '1995',
    firstName: 'Playwright',
    lastName: 'User',
    company: 'QA Testing',
    address: '123 Test Street',
    country: 'United States',
    state: 'California',
    city: 'Los Angeles',
    zipcode: '90001',
    mobileNumber: '9876543210',
  };
}

