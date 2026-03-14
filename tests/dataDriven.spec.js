const {test, expect} = require('@playwright/test');
const  testdata = JSON.parse(JSON.stringify(require("../testdata.json")));

test.describe("Data driven login test", function() {
    for(const data of testdata) {
        test(`Valid login - ${data.username}`, async function ({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill(data.username);
    await page.locator("//input[@placeholder='Password']").fill(data.password);
    await page.locator("//button[@type='submit']").click();
         });
    }
});