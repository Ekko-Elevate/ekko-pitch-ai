import fs, { unlink } from "fs/promises";
import path from "path";

export default async function resizeImage(filePath) {
	const sharp = await import("sharp");
	sharp.cache(false);

	try {
		console.log(filePath);
		const tempPath = path.join(
			path.dirname(filePath),
			`temp_${path.basename(filePath)}`
		);

		await sharp
			.default(filePath)
			.resize({
				width: 1280,
				height: 768,
				fit: "contain",
				background: { r: 0, g: 0, b: 0, alpha: 1 },
			})
			.toFile(tempPath);
		try {
			await deleteFile(filePath);
		} catch (error) {
			if (error.code === "EACCES") {
				console.error(`No write access to file: ${filePath}`);
			} else {
				console.error(`Error removing the original file (${filePath}):`, error);
			}
			throw error;
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

async function deleteFile(filePath) {
	try {
		await unlink(filePath);
		console.log("File successfully deleted.");
	} catch (error) {
		console.error("Error deleting the file:", error);
	}
}
