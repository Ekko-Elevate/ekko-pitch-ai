const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const os = require("os");

const platform = os.platform(); // e.g., 'win32', 'linux', 'darwin'
const arch = os.arch(); // e.g., 'x64', 'arm64'

// Construct the path to the ffmpeg executable
const ffmpegPath = path.resolve(
	process.cwd(),
	"node_modules",
	"@ffmpeg-installer",
	`${platform}-${arch}`,
	"ffmpeg.exe" // On Linux/Mac, this could just be 'ffmpeg' without the '.exe'
);

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
