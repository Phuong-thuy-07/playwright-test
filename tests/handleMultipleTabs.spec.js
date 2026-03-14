const {test, expect} = require('@playwright/test');

test("Working with multiple tabs", async function ({browser, browserName}) {
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
    console.log('Browser name:', browserName);
    console.log('Browser version:', browser.version());
        const seeMore = newPage.locator("(//span[normalize-space()='See more on Facebook'])[1]")
    const otherOption = newPage.getByText("Explore the things you love");
    await await expect(seeMore.or(otherOption).first()).toBeVisible();
})