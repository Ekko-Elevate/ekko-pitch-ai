// import { voiceGenerator } from "../../lib/elevenlabs/elevenlabs"; // Adjust the import path as necessary
// import { musicGenerator } from "../../lib/musicgen/elevenlabs"; // Adjust the import path as necessary

// export async function GET(request) {
//     // voiceGenerator();
//     return new Response("Hello, Next.js!");
// }
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export const GET = withApiAuthRequired(async function makeGenRoute(req) {
	const res = new NextResponse();
	const { user } = await getSession(req, res);
	return NextResponse.json({ protected: "My Secret", id: user.sub }, res);
});
