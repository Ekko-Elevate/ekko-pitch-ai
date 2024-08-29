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

export async function mergeAudio(
	voicepath,
	musicpath,
	outputpath,
	voicedelay = "0",
	musicdelay = "0"
) {
	return new Promise((resolve, reject) => {
		let command = ffmpeg()
			.input(voicepath)
			.input(musicpath)
			.complexFilter([
				{
					filter: "adelay",
					options: voicedelay,
					inputs: "0:a",
					outputs: "voice_delayed",
				},
				{
					filter: "adelay",
					options: musicdelay,
					inputs: "1:a",
					outputs: "music_delayed",
				},
				{
					filter: "volume",
					options: "1",
					inputs: "voice_delayed",
					outputs: "voice_volume",
				},
				{
					filter: "volume",
					options: "0.25",
					inputs: "music_delayed",
					outputs: "music_volume",
				},
				{
					filter: "amix",
					options: {
						inputs: 2,
						duration: "longest",
					},
					inputs: ["voice_volume", "music_volume"],
					outputs: "mixed",
				},
			])
			.map("mixed")
			.output(outputpath)
			.on("error", (err) => {
				console.log("Audio Merge Failed");
				reject(err);
			})
			.on("end", () => {
				resolve();
			});

		command.run();
	});
}
