import { NextResponse } from "next/server.js";
import resizeImage from "../../_lib/imgresizer/imgresizer.js";

export async function GET(req, res) {
	resizeImage('./app/_lib/imgresizer/bat.jpg', './app/_lib/imgresizer/meow.jpg');
	return NextResponse.json("success");
}