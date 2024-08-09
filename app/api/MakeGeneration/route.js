// import { voiceGenerator } from "../../lib/elevenlabs/elevenlabs"; // Adjust the import path as necessary
// import { musicGenerator } from "../../lib/musicgen/elevenlabs"; // Adjust the import path as necessary

export async function GET(request) {
	// voiceGenerator();
	return new Response("Hello, Next.js!");
}
