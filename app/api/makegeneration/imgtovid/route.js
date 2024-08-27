import { NextResponse } from "next/server";
import storeImage from "@/app/_lib/storeinputimage/storeinputimage";
import { musicGenerator } from "@/app/_lib/musicgen/musicgen";
import { voiceGenerator } from "@/app/_lib/elevenlabs/elevenlabs";
import { mergeAudio } from "@/app/_lib/audiomanagement/mergeaudio";
import { vidAddAudio } from "@/app/_lib/videomanagement/vidaddaudio";
import { convertToVideo } from "@/app/_lib/runway/runway";
import { v4 as uuidv4 } from "uuid";
import { storeS3video } from "@/app/_lib/S3/storeS3video";
import { createpresignedurl } from "@/app/_lib/S3/createpresignedurl";
import resizeImage from "@/app/_lib/imgresizer/imgresizer";
import { addCreation } from "@/app/_lib/mongoDB/utils/addcreation";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export const config = {
	api: {
		bodyParser: false,
	},
};

//with api auth required users MUST be signed in and api can only really be made from frontend.
export const POST = withApiAuthRequired(async function imgToVid(req) {
	const session = await getSession(req);
	const user = session.user;
	console.log(user);
	const formData = await req.formData();
	const image = formData.get("image");
	const voiceOverPrompt = formData.get("voiceOverPrompt");
	const musicPrompt = formData.get("musicPrompt");
	const scenePrompt = formData.get("scenePrompt"); // New field
	const title = formData.get("title"); // New field

	console.log(scenePrompt);
	console.log(musicPrompt);

	if (!image) {
		return NextResponse.json(
			{ error: "No image file uploaded" },
			{ status: 400 }
		);
	}

	const timestamp = Date.now();
	const id = `${uuidv4()}_${timestamp}`;

	try {
		//Store the image
		const originalFilename = image.name;
		const filePath = await storeImage(id, image, originalFilename);

		// Resize the image
		await resizeImage(filePath);
		console.log(filePath);
		// Run these operations concurrently
		await Promise.all([
			musicGenerator(id, musicPrompt),
			voiceGenerator(id, voiceOverPrompt),
			convertToVideo(id, filePath, scenePrompt), // Pass scenePrompt here
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
		//s3 functionality here

		// await addCreation(user.sub, "test title", `${id}.mp4`);
		await storeS3video(`${id}.mp4`, "video/mp4");

		await addCreation(user.sub, title, `${id}.mp4`);

		//create presigned url
		let url = await createpresignedurl(`${id}.mp4`);
		console.log(url);
		return NextResponse.json({ success: true, url }, { status: 200 });
	} catch (error) {
		console.error("Error in processing:", error);
		return NextResponse.json({ error: "Processing failed" }, { status: 500 });
	}
});
