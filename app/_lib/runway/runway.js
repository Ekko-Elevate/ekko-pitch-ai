const playwright = require("playwright");
const path = require("path");

export async function convertToVideo(id, filePath, scenePrompt) {
	let browser = null;
	try {
		browser = await playwright.chromium.launch({ headless: true });
		const context = await browser.newContext();
		const page = await context.newPage();

		// Set a timeout for the entire process
		const timeout = 180000; // 3 minutes
		const timeoutPromise = new Promise((_, reject) =>
			setTimeout(() => reject(new Error("Operation timed out")), timeout)
		);

		const scrapePromise = (async () => {
			await page.goto("https://app.runwayml.com/");

			// Fill in the login form with user and password OAaronml IS PAID USER
			await page.fill('input[name="usernameOrEmail"]', "Okhaml");
			await page.fill('input[name="password"]', "Password123123!");

			// Click the submit button and wait for navigation
			await page.click('button[type="submit"]');

			//wait for next page to render before continuing, it may take a few sec so we have to wait.
			await page.waitForURL("**/dashboard");

			// double checks to see if elements that only appear on the next page are actually there
			await page.locator('div[class="index-module__container__h5xYe"]', {
				timeout: 15000,
			});

			// Clicks the IMG->VID button on the dashboard, leading you to the generate vid page
			await page
				.locator(
					'//*[@id="root"]/div/div[3]/div[1]/div/div[2]/div[2]/div/div[3]/div[2]/div[1]/button'
				)
				.click();

			//wait for generate vid page to load
			await page.waitForURL("**/generative-video");

			//double checks to ensure elements that only appear on the generate vid page are there.
			await page.locator(
				'//*[@id="data-panel-id-left-panel-panel-top"]/div/div[2]/div/div/div/button',
				{
					timeout: 15000,
					state: "visible",
				}
			);

			//clicks add image button
			const fileInputSelector = 'input[type="file"]';
			await page.waitForSelector(fileInputSelector, { state: "attached" });

			// Set the file to be uploaded
			await page.setInputFiles(fileInputSelector, filePath);

			// waits for the text entry box to be ready
			const textElement = page.locator(
				"#data-panel-id-left-panel-panel-bottom > div > div > div > div > div.TextInput-module__textbox__F4Oub"
			);

			await textElement.waitFor();
			await page.focus(
				"#data-panel-id-left-panel-panel-bottom > div > div > div > div > div.TextInput-module__textbox__F4Oub"
			);
			await page.keyboard.type(
				"50mm lens, close up focus shot, diffused lighting, dynamic motion: " +
					scenePrompt
			);

			//clicks the upload button
			const generateButtonSelector =
				"#data-panel-id-1 > div.Base__Box-sc-1rhgz1n-0.InputsPanel__Container-sc-1nhvx2b-0.InputsPanel___StyledContainer-sc-1nhvx2b-1.bdjOmO > div > div > div > div.Gen2NextUIV1PanelGroup__panelContainer__kVYUm > div.Base__Box-sc-thne2y-0.Footer__Container-sc-1bv423v-0.hLgEP > div > div > button";
			const generateButtonElement = page.locator(generateButtonSelector);
			await generateButtonElement.waitFor();
			await page.click(generateButtonSelector);

			//clicks download button
			const downloadButtonSelector =
				"#gen2-next-layout-feed-container > div:nth-child(2) > div > div.Base__Box-sc-1rhgz1n-0.Output___StyledBox-sc-4ct5lz-0.dlfTEu > div.Output___StyledDiv-sc-4ct5lz-1.juAqeX > div > div:nth-child(3) > button:nth-child(1) > svg";
			const downloadButtonElement = page.locator(downloadButtonSelector);
			await downloadButtonElement.waitFor({ timeout: 140000 });
			await page.click(downloadButtonSelector);
			const download = await page.waitForEvent("download");
			const creationPath = path.join(
				"./app/api/makegeneration/_video",
				`${id}.mp4`
			);
			await download.saveAs(creationPath);
		})();

		// Race the scrape operation against the timeout
		await Promise.race([scrapePromise, timeoutPromise]);
	} catch (error) {
		console.error("An error occurred:", error);
		throw error; // Re-throw the error to be caught by the caller
	} finally {
		if (browser) {
			await browser.close();
		}
	}
}
