import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

export default async function resizeImage(filePath) {
	try {
		const tempPath = path.join(
			path.dirname(filePath),
			`temp_${path.basename(filePath)}`
		);

		await sharp(filePath)
			.resize({
				width: 1280,
				height: 768,
				fit: "contain",
				background: { r: 0, g: 0, b: 0, alpha: 1 },
			})
			.toFile(tempPath);

		// Add a delay to ensure the file is not locked
		await new Promise((resolve) => setTimeout(resolve, 200)); // 200ms delay

		try {
			await fs.unlink(filePath);
		} catch (rmError) {
			console.error("Error removing the original file:", rmError);
			throw rmError;
		}

		try {
			await fs.rename(tempPath, filePath);
		} catch (renameError) {
			console.error("Error renaming the temporary file:", renameError);
			throw renameError;
		}

		console.log("Image resized and original file overwritten successfully!");
	} catch (error) {
		console.error("An error occurred during image resizing:", error);
		throw error;
	}
}
