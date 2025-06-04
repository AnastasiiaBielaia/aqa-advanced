// const { test, expect } = require('@playwright/test');

// test.describe('Registration form validations', () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
//     await page.waitForSelector('text=Sign up');
//     await page.getByRole('button', { name: 'Sign up' }).click();
//   });

//   test('Positive: Successful registration', async ({ page }) => {
//     await page.getByRole('textbox', { name: 'Name' }).type('Anastasiia');
//     await page.getByRole('textbox', { name: 'Last name' }).type('Bielaia');
//     await page.getByRole('textbox', { name: 'Email' }).type(`aqa-${Date.now()}@test.com`);
//     await page.getByPlaceholder('Password').type('Password123!');
//     await page.getByPlaceholder('Repeat password').type('Password123!');
//     const registerButton = page.getByRole('button', { name: 'Register' });
//     await expect(registerButton).toBeEnabled();
//     await registerButton.click();
//     await expect(page.getByText('Add car')).toBeVisible({ timeout: 5000 });
//   });

//   test('Negative: Empty name field', async ({ page }) => {
//     await page.getByRole('textbox', { name: 'Last name' }).type('Bielaia');
//     await page.getByRole('textbox', { name: 'Email' }).type('aqa-emptyname@test.com');
//     await page.getByPlaceholder('Password').type('Password123!');
//     await page.getByPlaceholder('Repeat password').type('Password123!');
//     await page.getByRole('textbox', { name: 'Name' }).click();
//     await page.getByRole('textbox', { name: 'Last name' }).click(); 
//     await expect(page.getByText('Name required')).toBeVisible({ timeout: 3000 });
//     await expect(page.getByRole('button', { name: 'Register' })).toBeDisabled();
//   });

//   test('Negative: Invalid email format', async ({ page }) => {
//     await page.getByRole('textbox', { name: 'Name' }).type('Anastasiia');
//     await page.getByRole('textbox', { name: 'Last name' }).type('Bielaia');
//     await page.getByRole('textbox', { name: 'Email' }).type('invalid-email');
//     await page.getByPlaceholder('Password').type('Password123!');
//     await page.getByPlaceholder('Repeat password').type('Password123!');
//     await page.getByRole('textbox', { name: 'Name' }).click(); // blur Email
//     await expect(page.getByText('Email is incorrect')).toBeVisible({ timeout: 3000 });
//     await expect(page.getByRole('button', { name: 'Register' })).toBeDisabled();
//   });

//   test('Negative: Passwords do not match', async ({ page }) => {
//     await page.getByRole('textbox', { name: 'Name' }).type('Anastasiia');
//     await page.getByRole('textbox', { name: 'Last name' }).type('Bielaia');
//     await page.getByRole('textbox', { name: 'Email' }).type('aqa-mismatch@test.com');
//     await page.getByPlaceholder('Password').type('Password123!');
//     await page.getByPlaceholder('Repeat password').type('Password1234!');
//     await expect(page.getByRole('button', { name: 'Register' })).toBeDisabled();
//   });

//   test('Negative: Short password', async ({ page }) => {
//     await page.getByRole('textbox', { name: 'Name' }).type('Anastasiia');
//     await page.getByRole('textbox', { name: 'Last name' }).type('Bielaia');
//     await page.getByRole('textbox', { name: 'Email' }).type('aqa-shortpass@test.com');
//     await page.getByPlaceholder('Password').type('T1a');
//     await page.getByPlaceholder('Repeat password').type('T1a');
//     await page.getByPlaceholder('Password').click();
//     await page.getByRole('textbox', { name: 'Name' }).click();
//     await expect(page.getByText('Password has to be from 8 to 15 characters long')).toBeVisible({ timeout: 3000 });
//     await expect(page.getByRole('button', { name: 'Register' })).toBeDisabled();
//   });

//   test('Negative: Invalid characters in name', async ({ page }) => {
//     await page.getByRole('textbox', { name: 'Name' }).type('!An@');
//     await page.getByRole('textbox', { name: 'Last name' }).type('Bielaia');
//     await page.getByRole('textbox', { name: 'Email' }).type('aqa-invalidname@test.com');
//     await page.getByPlaceholder('Password').type('Password123!');
//     await page.getByPlaceholder('Repeat password').type('Password123!');
//     await page.getByRole('textbox', { name: 'Last name' }).click(); 
//     await expect(page.getByText('Name is invalid')).toBeVisible({ timeout: 3000 });
//     await expect(page.getByRole('button', { name: 'Register' })).toBeDisabled();
//   });
// });

const { test, expect } = require('@playwright/test');

test.describe('Registration form validations', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up').click();
    await expect(page.locator('form')).toBeVisible();
  });

  test('Positive: Successful registration', async ({ page }) => {
    await page.fill('input[name="name"]', 'Anastasiia');
    await page.fill('input[name="lastName"]', 'Bielaia');
    await page.fill('input[name="email"]', `aqa-${Date.now()}@test.com`);
    await page.fill('input[name="password"]', 'Password123!');
    await page.fill('input[name="repeatPassword"]', 'Password123!');
    const registerButton = page.locator('button', { hasText: 'Register' });
    await expect(registerButton).toBeEnabled();
    await registerButton.click();
    await expect(page.getByText('Add car')).toBeVisible({ timeout: 5000 });
  });

  test('Negative: Empty name field', async ({ page }) => {
    await page.fill('input[name="lastName"]', 'Bielaia');
    await page.fill('input[name="email"]', 'aqa-emptyname@test.com');
    await page.fill('input[name="password"]', 'Password123!');
    await page.fill('input[name="repeatPassword"]', 'Password123!');
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="lastName"]').click();
    await expect(page.getByText('Name required')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
  });

  test('Negative: Invalid email format', async ({ page }) => {
    await page.fill('input[name="name"]', 'Anastasiia');
    await page.fill('input[name="lastName"]', 'Bielaia');
    await page.fill('input[name="email"]', 'invalid-email');
    await page.fill('input[name="password"]', 'Password123!');
    await page.fill('input[name="repeatPassword"]', 'Password123!');
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="name"]').click(); 
    await expect(page.getByText('Email is incorrect')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
  });

  test('Negative: Passwords do not match', async ({ page }) => {
    await page.fill('input[name="name"]', 'Anastasiia');
    await page.fill('input[name="lastName"]', 'Bielaia');
    await page.fill('input[name="email"]', 'aqa-mismatch@test.com');
    await page.fill('input[name="password"]', 'Password123!');
    await page.fill('input[name="repeatPassword"]', 'Password1234!');
    await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
  });

  test('Negative: Short password', async ({ page }) => {
    await page.fill('input[name="name"]', 'Anastasiia');
    await page.fill('input[name="lastName"]', 'Bielaia');
    await page.fill('input[name="email"]', 'aqa-shortpass@test.com');
    await page.fill('input[name="password"]', 'T1a');
    await page.fill('input[name="repeatPassword"]', 'T1a');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="name"]').click();
    await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
  });

  test('Negative: Invalid characters in name', async ({ page }) => {
    await page.fill('input[name="name"]', '!An@');
    await page.fill('input[name="lastName"]', 'Bielaia');
    await page.fill('input[name="email"]', 'aqa-invalidname@test.com');
    await page.fill('input[name="password"]', 'Password123!');
    await page.fill('input[name="repeatPassword"]', 'Password123!');
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="lastName"]').click(); 
    await expect(page.getByText('Name is invalid')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
  });
});

