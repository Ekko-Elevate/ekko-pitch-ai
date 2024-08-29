const ffmpeg = require("fluent-ffmpeg");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");

ffmpeg.setFfmpegPath(ffmpegInstaller.path);
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
