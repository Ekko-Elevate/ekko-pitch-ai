import fs from "fs/promises";
import path from "path";

export default async function storevideo(video, id = "1234") {
	const uploadDir = path.join(
		process.cwd(),
		"app",
		"api",
		"makegeneration",
		"_video"
	);
	//id is a variable with both the input video file name along with the time it was sent, this is done to help stop 2 vids sent at the exact same time from conflicting with each other
	const newFilename = id;
	const filePath = path.join(uploadDir, newFilename);

	try {
		// Ensure the upload directory exists
		await fs.mkdir(uploadDir, { recursive: true });

		// Write the file
		const bytes = await video.arrayBuffer();
		const buffer = Buffer.from(bytes);
		await fs.writeFile(filePath, buffer);

		console.log("File uploaded successfully");
		return newFilename; // Return the path of the uploaded file
	} catch (error) {
		console.error("Error during file upload:", error);
		throw new Error(`File upload failed: ${error.message}`);
	}
}
