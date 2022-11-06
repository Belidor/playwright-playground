import { expect, Locator, Page } from '@playwright/test';

export class DynamicTablePage {
    readonly page: Page;
    readonly tableHeader: Locator;

    costructor(page: Page) {
      this.page = page;
      this.tableHeader = page.locator('body > div > table > thead > tr > th:nth-child(1)');
    }

		async openApp() {
   		await this.page.goto('https://qaplayground.dev/apps/dynamic-table/');
    	await expect(page.locator(this.tableHeader)).toBeVisible();
  }
}
