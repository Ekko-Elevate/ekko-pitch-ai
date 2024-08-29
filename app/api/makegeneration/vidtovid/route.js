import { NextResponse } from "next/server";
import storevideo from "../../../_lib/storeinputvideo/storeinputvideo";
import { musicGenerator } from "../../../_lib/musicgen/musicgen";
import { voiceGenerator } from "../../../_lib/elevenlabs/elevenlabs";
import { mergeAudio } from "../../../_lib/audiomanagement/mergeaudio";
import { vidAddAudio } from "@/app/_lib/videomanagement/vidaddaudio";
import { storeS3video } from "@/app/_lib/S3/storeS3video";
import { createpresignedurl } from "@/app/_lib/S3/createpresignedurl";
import { v4 as uuidv4 } from "uuid";
import { addCreation } from "@/app/_lib/mongoDB/utils/addcreation";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";


//IF THIS CODE DOESNT WORK MAKE SURE MUSIC GEN AND VOICE GEN BELOW ISNT COMMENTED OUT

export const POST = withApiAuthRequired(async function vidToVid(req) {
	const session = await getSession(req);
	const user = session.user;
	console.log(user);
	const formData = await req.formData();
	const video = formData.get("video");
	const voiceOverPrompt = formData.get("voiceOverPrompt");
	const musicPrompt = formData.get("musicPrompt");
	const title = formData.get("title"); // New field

	console.log(voiceOverPrompt);
	console.log(musicPrompt);
	if (!video) {
		return NextResponse.json(
			{ error: "No video file uploaded" },
			{ status: 400 }
		);
	}

	//uuidv4 is super random number its very secure, nearly impossible to guess
	const timestamp = Date.now();
	const id = `${uuidv4()}_${timestamp}`;

	try {
		// Run these operations concurrently
		await Promise.all([
			storevideo(id, video),
			musicGenerator(id, musicPrompt),
			voiceGenerator(id, voiceOverPrompt),
		]);

		console.log("Video stored, music generated, and voice generated");

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

		await storeS3video(`${id}.mp4`, "video/mp4");
		await addCreation(user.sub, title, `${id}.mp4`);
		let url = await createpresignedurl(`${id}.mp4`);
		console.log(url);
		return NextResponse.json({ success: true, id, url });
	} catch (error) {
		console.error("Error in processing:", error);
		return NextResponse.json({ error: "Processing failed" }, { status: 500 });
	}
});
