import { test, expect } from '@playwright/test';
import { DynamicTablePage } from '../pages/dynamic-table-page';

test.describe("Dynamic table app tests", () => {

    test.beforeEach(async ({ page }) => {
      const dynamicTablePage = new DynamicTablePage();

      await dynamicTablePage.openApp();
    });

    test("Should verify Spider-Man's real name", async ({ page }) => {

      await expect(page.locator('body > div > table > thead > tr > th:nth-child(1)')).toBeVisible();

    });
});
