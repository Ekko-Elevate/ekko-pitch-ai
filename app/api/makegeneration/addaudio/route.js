import { musicGenerator } from "../../../_lib/musicgen/musicgen";
import { voiceGenerator } from "../../../_lib/elevenlabs/elevenlabs";
import { mergeAudio } from "../../../_lib/audiomanagement/mergeaudio";
import { vidAddAudio } from "@/app/_lib/videomanagement/vidaddaudio";

export async function GET(request) {
	let id = "1234";
	await musicGenerator();
	await voiceGenerator();
	await mergeAudio(
		`./app/api/makegeneration/_voice/voice${id}.mp3`,
		`./app/api/makegeneration/_music/music${id}.mp3`,
		`./app/api/makegeneration/_audio/audio${id}.mp3`
	);
	console.log("Audio merged");
	await vidAddAudio(
		`./app/api/makegeneration/_video/video${id}.mp4`,
		`./app/api/makegeneration/_audio/audio${id}.mp3`,
		`./app/api/makegeneration/_output/output${id}.mp4`
	);
	console.log("Vid Created");

	return new Response("Hello, Next.js!");
}
