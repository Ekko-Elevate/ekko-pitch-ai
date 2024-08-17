import sharp from "sharp";
import fs from "fs";
import path from "path";

// Function to resize the image
export default async function resizeImage(inputPath, outputPath) {
    try {
        const image = sharp(inputPath);

        await image
            .resize({
                width: 1280,
                height: 768,
                fit: "contain",
                background: { r: 0, g: 0, b: 0, alpha: 1 }, // black background
            })
            .toFile(outputPath);

        console.log("Image resized successfully!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
