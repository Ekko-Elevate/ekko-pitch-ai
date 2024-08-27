import { NextResponse } from "next/server";
import { createpresignedurl } from "@/app/_lib/S3/createpresignedurl.js";

export async function GET(req) {
	let url;
	try {
		url = await createpresignedurl(
			"06eb3e5d-3aed-4d9d-a930-5ef298b626d9_1724609830593"
		);
		console.log("success");
		return NextResponse.json({ url: url });
	} catch (error) {
		console.error("Error creating presigned URL:", error);
		return NextResponse.json(
			{ error: "Failed to create presigned URL" },
			{ status: 500 }
		);
	}
}
