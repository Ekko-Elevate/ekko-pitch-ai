import { voiceGenerator } from "../../lib/elevenlabs/elevenlabs"; // Adjust the import path as necessary
// import { voiceGenerator } from "../../lib/elevenlabs/elevenlabs"; // Adjust the import path as necessary

export async function GET(request) {
	voiceGenerator();
	return new Response("Hello, Next.js!");
}
