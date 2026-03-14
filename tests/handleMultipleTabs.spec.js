const {test, expect} = require('@playwright/test');

test("Working with multiple tabs", async function ({browser}) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    const [newPage] = await Promise.all
    (
        [
            context.waitForEvent("page"),
            page.locator("//div[@id='login_container']//a[contains(@href, 'facebook')]").click()
        ]
    )
    await expect(newPage.locator("(//span[normalize-space()='See more on Facebook'])[1]")).toBeVisible();
})