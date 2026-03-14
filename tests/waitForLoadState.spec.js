const {test, expect} = require('@playwright/test');

test("My First Test", async function ({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.getByAltText("New user? Signup").click;
    const count = await page.locator("//input[@type='checkbox']").count();
    await expect(count).toBe(6);


})