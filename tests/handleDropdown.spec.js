const {test, expect} = require('@playwright/test');
const { stat } = require('node:fs');

test("My First Test", async function ({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.locator("#state").selectOption({label:"Goa"});
    const chosenValue = await page.locator("#state").textContent();
    await expect(chosenValue.includes("Goa")).toBeTruthy();

    const options = await page.locator("#state option");
    const count = await options.count();

    for (let i = 0; i < count; i++) {
    console.log((await options.nth(i).textContent())?.trim());
    }

})