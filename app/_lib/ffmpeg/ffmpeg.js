import dynamic from "next/dynamic";

const ffmpeg = dynamic(() => import("fluent-ffmpeg"), { ssr: false });
const ffmpegInstaller = dynamic(() => import("@ffmpeg-installer/ffmpeg"), {
	ssr: false,
});

export default async function combineMedia(audio1, audio2, video, output) {
	const ffmpegPath = (await ffmpegInstaller).path;
	ffmpeg.setFfmpegPath(ffmpegPath);

	return new Promise((resolve, reject) => {
		ffmpeg()
			.input(audio1)
			.input(audio2)
			.input(video)
			.outputOptions([
				"-filter_complex",
				"[0:a][1:a]amix=inputs=2:duration=longest[aout]",
				"-map [aout]",
				"-map 2:v",
			])
			.output(output)
			.on("end", () => resolve("Processing finished successfully"))
			.on("error", (err) =>
				reject(new Error(`An error occurred: ${err.message}`))
			)
			.run();
	});
}
