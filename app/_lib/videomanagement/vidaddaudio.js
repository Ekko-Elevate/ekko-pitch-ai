const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = path.resolve(
	process.cwd(),
	"node_modules",
	"@ffmpeg-installer",
	"win32-x64",
	"ffmpeg.exe"
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
