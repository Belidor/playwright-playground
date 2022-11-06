import { test, expect } from '@playwright/test';
import { DynamicTablePage } from '../pages/dynamic-table-page';

test.describe("Dynamic table app tests", () => {

    test.beforeEach(async ({ page }) => {
      const tableHeader = page.locator('body > div > table > thead > tr > th:nth-child(1)');

      await page.goto('https://qaplayground.dev/apps/dynamic-table/');
      await expect(tableHeader).toBeVisible();
    });

    test("Should verify Spider-Man's real name", async ({ page }) => {

      await expect(page.locator('body > div > table > thead > tr > th:nth-child(1)')).toBeVisible();

    });
});
