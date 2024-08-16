const playwright = require("playwright");
const path = require("path");

async function scrapeWebsite(url) {
	//launch chromium, set headless to true if you dont wanna see the browser pop up, else set false
	//FYI think of head as a browser popup, the double negative is a little confusing
	const browser = await playwright.chromium.launch({ headless: false });
	//think of browser as a super secure incognito window
	const context = await browser.newContext();
	//think of page as opening a new tab
	const page = await context.newPage();

	await page.goto(url);

	// Fill in the login form with user and password
	await page.fill('input[name="usernameOrEmail"]', "aaronqtran6@gmail.com");
	await page.fill('input[name="password"]', "123123!Password");

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
	const filePath = path.join(__dirname, "astro-transformed.jpeg");
	await page.setInputFiles(fileInputSelector, filePath);

	await page
		.locator(".ImagePromptPreview___StyledPreview4-sc-1x2rj1o-1")
		.waitFor();

	// waits for the text entry box to be ready
	let textboxSelector =
		"#data-panel-id-left-panel-panel-bottom > div > div > div > div";
	await page.waitForSelector(textboxSelector, { state: "attached" });

	// Click the element to focus it
	await page.click(textboxSelector);

	// Type the text prompt here
	await page.keyboard.type(
		"The camera pans over as the bird flaps it's wings, 60fps."
	);

	//clicks the upload button
	let uploadButtonSelector =
		"#data-panel-id-1 > div.Base__Box-sc-1rhgz1n-0.InputsPanel__Container-sc-1nhvx2b-0.InputsPanel___StyledContainer-sc-1nhvx2b-1.bdjOmO > div > div > div > div.Gen2NextUIV1PanelGroup__panelContainer__kVYUm > div.Base__Box-sc-thne2y-0.Footer__Container-sc-1bv423v-0.hLgEP > div:nth-child(2) > div.Base__Box-sc-thne2y-0.GenerateButtonTooltip___StyledBox-sc-12r0983-0.Xqsd > button";
	await page.waitForSelector(uploadButtonSelector, { state: "visible" });
	await page.click(uploadButtonSelector);

	//pauses the page, this will allows devs to see the page that was rendered if they're NOT in headless mode
	// await page.pause();

	await browser.close();
}

(async () => {
	await scrapeWebsite("https://app.runwayml.com/");
})();
// #data-panel-id-left-panel-panel-top > div > div.PreviewPanel___StyledDiv-sc-11ybtyx-6.bjtMZV > div > div
