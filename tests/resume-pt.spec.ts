import { expect, test } from "@playwright/test";

test.describe("Portuguese Resume Page", () => {
	test("page loads with correct title", async ({ page }) => {
		await page.goto("/pt");
		await expect(page).toHaveTitle(/Bruno C Prado/);
	});

	test("shows correct name", async ({ page }) => {
		await page.goto("/pt");
		await expect(page.locator("header h1").first()).toContainText(
			"Bruno C Prado",
		);
	});

	test("shows correct job title in Portuguese", async ({ page }) => {
		await page.goto("/pt");
		await expect(page.locator("header p").first()).toContainText(
			"Desenvolvedor Full Stack Júnior",
		);
	});

	test("language switcher link exists", async ({ page }) => {
		await page.goto("/pt");
		const enLink = page.getByRole("link", { name: "EN" });
		await expect(enLink).toBeVisible();
	});

	test("language switcher navigates to English", async ({ page }) => {
		await page.goto("/pt");
		await page.getByRole("link", { name: "EN" }).click();
		await expect(page).toHaveURL(/.*\/$/);
	});

	test("shows contact information", async ({ page }) => {
		await page.goto("/pt");
		await expect(page.getByText("brunocostaprado@gmail.com")).toBeVisible();
		await expect(page.getByText("São Paulo, São Paulo")).toBeVisible();
	});

	test("shows skills sections", async ({ page }) => {
		await page.goto("/pt");
		await expect(page.getByText("Front-End")).toBeVisible();
		await expect(page.getByText("Back-End")).toBeVisible();
	});

	test("shows education section", async ({ page }) => {
		await page.goto("/pt");
		await expect(page.getByText("Education")).toBeVisible();
		await expect(page.getByText("ETEC Albert Einstein")).toBeVisible();
	});
});
