import { NextResponse } from "next/server";
import storeImage from "@/app/_lib/storeinputimage/storeinputimage";
import { musicGenerator } from "@/app/_lib/musicgen/musicgen";
import { voiceGenerator } from "@/app/_lib/elevenlabs/elevenlabs";
import { mergeAudio } from "@/app/_lib/audiomanagement/mergeaudio";
import { vidAddAudio } from "@/app/_lib/videomanagement/vidaddaudio";
import { convertToVideo } from "@/app/_lib/runway/runway";
import { v4 as uuidv4 } from "uuid";
import resizeImage from "@/app/_lib/imgresizer/imgresizer";

export const config = {
	api: {
		bodyParser: false,
	},
};

export async function POST(req) {
	const formData = await req.formData();
	const image = formData.get("image");
	const voiceOverPrompt = formData.get("voiceOverPrompt");
	const musicPrompt = formData.get("musicPrompt");

	if (!image) {
		return NextResponse.json(
			{ error: "No image file uploaded" },
			{ status: 400 }
		);
	}

	const timestamp = Date.now();
	const id = `${uuidv4()}_${timestamp}`;

	try {
		// Store the image
		const originalFilename = image.name;
		const filePath = await storeImage(id, image, originalFilename);

		// Resize the image
		await resizeImage(filePath);

		//Run these operations concurrently
		await Promise.all([
			musicGenerator(id, musicPrompt),
			voiceGenerator(id, voiceOverPrompt),
			convertToVideo(id, filePath),
		]);

		console.log("Video created, music generated, and voice generated");

		await mergeAudio(
			`./app/api/makegeneration/_voice/${id}.mp3`,
			`./app/api/makegeneration/_music/${id}.mp3`,
			`./app/api/makegeneration/_audio/${id}.mp3`
		);
		console.log("Audio merged");
		await vidAddAudio(
			`./app/api/makegeneration/_video/${id}.mp4`,
			`./app/api/makegeneration/_audio/${id}.mp3`,
			`./app/api/makegeneration/_output/${id}.mp4`
		);
		console.log("Vid Created");

		return NextResponse.json({ success: true, id });
	} catch (error) {
		console.error("Error in processing:", error);
		return NextResponse.json({ error: "Processing failed" }, { status: 500 });
	}
}
