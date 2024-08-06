import { voiceGenerator } from "../lib/elevenlabs/elevenlabs";

export default function Clean() {
	voiceGenerator();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			This Is Clean
		</main>
	);
}
