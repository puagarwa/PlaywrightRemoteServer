
import { test, type Page, expect } from "@playwright/test";
let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.describe("Playwright Service issue", async () => {
  test.beforeEach(async () => {
    await page.goto(
      `https://www.wikipedia.org/`
    );
  });
  test("Fail the first time", async (testInfo) => {
    //Crude method to try get the test to fail on first go, then succeed later
    //retries need to also be greater than1
    //execute again till the if statement is entered
    //The test timeout should be set to 10seconds so when the condition is true the test should fail.
    const number = Math.random()
    if (number > 0.5) {
      const downloadPromise = page.waitForEvent("download");
      await page.waitForTimeout(15000)
      await page.locator(`//input[@id='searchInput']`).click();     
      const download = await downloadPromise;
    }
    expect(true).toBe(true)
  });
});