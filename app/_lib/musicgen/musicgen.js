const Replicate = require("replicate");
const replicate = new Replicate();
const https = require("https");
const fs = require("fs");

const input = {
	prompt: "overwatch lijiang tower",
	model_version: "stereo-large",
	output_format: "mp3",
	normalization_strategy: "peak",
	duration: 15,
};

export async function musicGenerator(id = "1234") {
	const output = await replicate.run(
		"meta/musicgen:671ac645ce5e552cc63a54a2bbff63fcf798043055d2dac5fc9e36a837eedcfb",
		{ input }
	);
	console.log(output);

	await downloadFile(output, `app/api/makegeneration/_music/music${id}.mp3`);
	console.log("Download Completed");
}

function downloadFile(url, outputPath) {
	return new Promise((resolve, reject) => {
		const file = fs.createWriteStream(outputPath);
		https
			.get(url, (response) => {
				response.pipe(file);

				file.on("finish", () => {
					file.close();
					resolve();
				});

				file.on("error", (err) => {
					fs.unlink(outputPath, () => reject(err));
				});
			})
			.on("error", (err) => {
				fs.unlink(outputPath, () => reject(err));
			});
	});
}
