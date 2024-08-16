import { musicGenerator } from "../../../_lib/musicgen/musicgen";
import { voiceGenerator } from "../../../_lib/elevenlabs/elevenlabs";
import { mergeAudio } from "../../../_lib/audiomanagement/mergeaudio";

export async function GET(request) {
	let id = "1234";
	// await voiceGenerator();
	// await musicGenerator();
	console.log("beginning to merge audio");
	mergeAudio(`./app/api/makegeneration/_voice/voice${id}.mp3`, `./app/api/makegeneration/_music/music${id}.mp3`, `./app/api/makegeneration/_output/audio${id}.mp3`, 15);
	console.log("Audio merged");

	return new Response("Hello, Next.js!");
}