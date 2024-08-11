import { ElevenLabsClient, ElevenLabs } from "elevenlabs";
import fs from "fs"; //file system
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const client = new ElevenLabsClient({ apiKey: process.env.ELEVEN_API_TOKEN });

export const voiceGenerator = async () => {
	const audioStream = await client.textToSpeech.convert(
		"bIHbv24MWmeRgasZH58o",
		{
			// set voice id heres
			// specify the model here
			model_id: "eleven_turbo_v2_5",
			optimize_streaming_latency: ElevenLabs.OptimizeStreamingLatency.Zero,
			output_format: ElevenLabs.OutputFormat.Mp32205032,
			language_code: "es",
			text: "Aaron ",
			voice_settings: {
				model_id: "eleven_turbo_v2_5",
				stability: 0.5,
				similarity_boost: 0.8,
				style: 0.0,
				use_speaker_boost: true,
			},
		}
	);

	//name audio file, write stream emites finish or error
	const writeStream = fs.createWriteStream("voice.mp3");

	//save audio
	audioStream.pipe(writeStream);

	writeStream.on("finish", () => {
		console.log("saved");
	});

	writeStream.on("error", (err) => {
		console.error("Error, not saved", err);
	});
};
