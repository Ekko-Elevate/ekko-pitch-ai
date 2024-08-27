import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import path from "path";
import { readFile } from "fs/promises";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Configure AWSnp
const s3Client = new S3Client({
	region: "us-east-2",
	credentials: {
		accessKeyId: process.env.AWS_IAM_ACCESS_KEY,
		secretAccessKey: process.env.AWS_IAM_SECRET_KEY,
	},
});

export async function storeS3video(S3ID, contentType) {
	const filePath = path.join(`./app/api/makegeneration/_output/${S3ID}`);
	try {
		console.log(filePath);
		const fileContent = await readFile(filePath);

		const params = {
			Bucket: "ekkoads",
			Key: S3ID,
			Body: fileContent,
			ContentType: contentType, // Adjust this based on your video format
		};

		const command = new PutObjectCommand(params);
		const response = await s3Client.send(command);

		console.log("Video uploaded successfully. ETag:", response.ETag);
	} catch (err) {
		console.error("Error uploading video:", err);
	}
}
