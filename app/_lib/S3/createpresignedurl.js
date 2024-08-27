import path from "path";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export async function createpresignedurl(S3ID) {
	const client = new S3Client({
		region: "us-east-2", // Replace with your bucket's region
		credentials: {
			accessKeyId: process.env.AWS_IAM_ACCESS_KEY,
			secretAccessKey: process.env.AWS_IAM_SECRET_KEY,
		},
	});

	const command = new GetObjectCommand({
		Bucket: "ekkoads",
		Key: S3ID,
	});

	try {
		const signedUrl = await getSignedUrl(client, command, {
			expiresIn: 86400,
		});
		return signedUrl;
	} catch (err) {
		console.error("Error creating presigned URL:", err);
		throw err;
	}
}
