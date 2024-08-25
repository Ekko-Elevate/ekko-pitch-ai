import { NextResponse } from "next/server";
import { createpresignedurl } from "@/app/_lib/S3/createpresignedurl.js";

export async function GET(req) {
  let url;
  try {
    url = await createpresignedurl("ad_1");
    console.log("success");
    return NextResponse.json({ url: url });
  } catch (error) {
    console.error("Error creating presigned URL:", error);
    return NextResponse.json({ error: "Failed to create presigned URL" }, { status: 500 });
  }
}