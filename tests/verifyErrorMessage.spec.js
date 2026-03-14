const {test, expect} = require('@playwright/test')

test("Valid login", async function ({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.viewportSize().width
    await page.getByPlaceholder("Username").fill("Admin");
    await page.locator("//input[@placeholder='Password']").fill("admin12");
    await page.locator("//button[@type='submit']").click();
    const errorMessage = await page.locator("//p[normalize-space()='Invalid credentials']");
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText("Invalid credentials");
    const textErrorMessage = await page.locator("//p[normalize-space()='Invalid credentials']").textContent();
    await expect(textErrorMessage==="Invalid credentials").toBeTruthy();
});