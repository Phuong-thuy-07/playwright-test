const {test, expect} = require('@playwright/test')

test("My First Test", async function ({page}) {
    await page.goto("https://www.google.com/")
    const url = await page.url();
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle("Google");
})