import { expect, test } from "@playwright/test";

test.describe("English Resume Page", () => {
	test("page loads with correct title", async ({ page }) => {
		await page.goto("/");
		await expect(page).toHaveTitle(/Bruno C Prado/);
	});

	test("shows correct name", async ({ page }) => {
		await page.goto("/");
		await expect(page.locator("header h1").first()).toContainText(
			"Bruno C Prado",
		);
	});

	test("shows correct job title", async ({ page }) => {
		await page.goto("/");
		await expect(page.locator("header p").first()).toContainText(
			"Full Stack Junior Developer",
		);
	});

	test("language switcher link exists", async ({ page }) => {
		await page.goto("/");
		const ptLink = page.getByRole("link", { name: "PT" });
		await expect(ptLink).toBeVisible();
	});

	test("language switcher navigates to Portuguese", async ({ page }) => {
		await page.goto("/");
		await page.getByRole("link", { name: "PT" }).click();
		await expect(page).toHaveURL(/.*\/pt/);
	});

	test("shows contact information", async ({ page }) => {
		await page.goto("/");
		await expect(page.getByText("brunocostaprado@gmail.com")).toBeVisible();
		await expect(page.getByText("São Paulo, São Paulo")).toBeVisible();
	});

	test("shows skills sections", async ({ page }) => {
		await page.goto("/");
		await expect(page.getByText("Front-End")).toBeVisible();
		await expect(page.getByText("Back-End")).toBeVisible();
	});

	test("shows education section", async ({ page }) => {
		await page.goto("/");
		await expect(page.getByText("Education")).toBeVisible();
		await expect(page.getByText("ETEC Albert Einstein")).toBeVisible();
	});
});
