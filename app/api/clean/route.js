import { NextResponse } from "next/server.js";
import { handleLogin } from "@auth0/nextjs-auth0";

import resizeImage from "../../_lib/imgresizer/imgresizer.js";

export async function GET(req, res) {
	try {
		await console.log("yo");
		await handleLogin(req, res);
	} catch (error) {
		res.status(error.status || 400).end(error.message);
	}
	// resizeImage('./app/_lib/imgresizer/bat.jpg', './app/_lib/imgresizer/meow.jpg');
	return NextResponse.json("success");
}
