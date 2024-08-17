import { IncomingForm } from "formidable";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

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

	if (!video) {
		return NextResponse.json(
			{ error: "No video file uploaded" },
			{ status: 400 }
		);
	}

	const timestamp = Date.now();
	const uploadDir = path.join(process.cwd(), "_inputimages");
	const newFilename = `${timestamp}_${video.name}`;
	const filePath = path.join(uploadDir, newFilename);

	try {
		// Ensure the upload directory exists
		await fs.mkdir(uploadDir, { recursive: true });

		// Write the file
		const bytes = await video.arrayBuffer();
		const buffer = Buffer.from(bytes);
		await fs.writeFile(filePath, buffer);

		return NextResponse.json({ pass: "imported" }, { status: 200 });
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
