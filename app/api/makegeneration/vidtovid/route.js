import { NextResponse } from "next/server";
import storevideo from "../../../_lib/storelocalvideo/storelocalvideo";
import { musicGenerator } from "../../../_lib/musicgen/musicgen";
import { voiceGenerator } from "../../../_lib/elevenlabs/elevenlabs";
import { mergeAudio } from "../../../_lib/audiomanagement/mergeaudio";
import { vidAddAudio } from "@/app/_lib/videomanagement/vidaddaudio";

export const config = {
	api: {
		bodyParser: false,
	},
};

export async function POST(req) {
	const formData = await req.formData();
	const video = formData.get("video");
	const voiceOverPrompt = formData.get("voiceOverPrompt");
	const musicPrompt = formData.get("musicPrompt");
	console.log(voiceOverPrompt);
	console.log(musicPrompt);
	if (!video) {
		return NextResponse.json(
			{ error: "No video file uploaded" },
			{ status: 400 }
		);
	}

	const timestamp = Date.now(); // Add this line to define timestamp
	const id = `${timestamp}_${video.name}`;

	try {
		// Run these operations concurrently
		await Promise.all([
			storevideo(video, id),
			musicGenerator(id, musicPrompt),
			voiceGenerator(id, voiceOverPrompt),
		]);

		console.log("Video stored, music generated, and voice generated");

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

		return NextResponse.json({ success: true, id });
	} catch (error) {
		console.error("Error in processing:", error);
		return NextResponse.json({ error: "Processing failed" }, { status: 500 });
	}
}
