const {test, expect} = require('@playwright/test');

test("My First Test", async function ({page}) {
    await page.goto("https://www.google.com/");
    await page.locator("textarea[name='q']").fill("watch");
    await page.keyboard.press("Enter");

})