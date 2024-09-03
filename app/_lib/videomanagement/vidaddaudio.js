const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const os = require("os");

const platform = os.platform();
const arch = os.arch();

let ffmpegPath;

if (platform === "win32") {
	ffmpegPath = path.resolve(
		process.cwd(),
		"node_modules",
		"@ffmpeg-installer",
		"win32-" + arch,
		"ffmpeg.exe"
	);
} else if (platform === "linux") {
	ffmpegPath = path.resolve(
		process.cwd(),
		"node_modules",
		"@ffmpeg-installer",
		"linux-" + arch,
		"ffmpeg"
	);
} else {
	throw new Error("Unsupported platform: " + platform);
}
ffmpeg.setFfmpegPath(ffmpegPath);

export async function vidAddAudio(
	videopath,
	audiopath,
	outputpath,
	audiodelay = 0
) {
	return new Promise((resolve, reject) => {
		let command = ffmpeg()
			.input(videopath)
			.input(audiopath)
			.complexFilter([
				{
					filter: "adelay",
					options: audiodelay,
					inputs: "1:a",
					outputs: "delayed_audio",
				},
				{
					filter: "asetpts",
					options: "PTS-STARTPTS",
					inputs: "delayed_audio",
					outputs: "reset_audio",
				},
				{
					filter: "amix",
					options: {
						inputs: 1,
						duration: "first",
					},
					inputs: ["reset_audio"],
					outputs: "mixed_audio",
				},
			])
			.outputOptions(["-map 0:v", "-map [mixed_audio]", "-shortest"])
			.output(outputpath)
			.on("error", (err) => {
				console.log("Video/Audio Merge Failed");
				reject(err);
			})
			.on("end", () => {
				resolve();
			});

		command.run();
	});
}
