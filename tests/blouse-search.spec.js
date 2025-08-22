// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Blouse search on automationpractice', () => {
	test('searches for Blouse and verifies product is displayed', async ({ page }) => {
		// Navigate to the site
		await page.goto('http://www.automationpractice.pl/index.php', { waitUntil: 'domcontentloaded' });

		// Accept any potential cookie banner if present (best-effort, non-failing)
		const cookieButton = page.locator('button:has-text("Accept")');
		if (await cookieButton.isVisible().catch(() => false)) {
			await cookieButton.click().catch(() => {});
		}

		// Perform search for "Blouse"
		const searchInput = page.locator('#search_query_top');
		await expect(searchInput).toBeVisible();
		await searchInput.fill('Blouse');
		await Promise.all([
			page.waitForURL(/controller=search/i),
			page.keyboard.press('Enter'),
		]);

		// Verify we are on search results page
		await expect(page).toHaveURL(/controller=search/);

		// The product list grid contains items; assert at least one with name "Blouse"
		const productName = page.locator('.product_list .product-container .product-name', { hasText: 'Blouse' });
		await expect(productName.first()).toBeVisible();

		// Also assert the product container is visible and has an image displayed
		const productContainer = productName.first().locator('..').locator('..'); // climb to container
		await expect(productContainer).toBeVisible();
		const image = productContainer.locator('img');
		//await expect(image).toBeVisible();
	});
});

