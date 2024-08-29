//first need to get all the ads a user has made from mongo
//retrieve id list from User table
//crossreference with Creations table and get title of ad
//return array of user's creation title
import { connectToDatabase } from "../../_lib/mongoDB/connection/db.js";
import { NextResponse } from "next/server.js";
import { getCreations } from "@/app/_lib/mongoDB/utils/getcreations";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export const GET = withApiAuthRequired(async function makeGenRoute(req) {
	try {
		const session = await getSession(req);
		const user = session.user;
		await connectToDatabase();
		const msg = "worked";
		// Parse the JSON body of the request

		const { userId } = user.sub;

		//const userId = "user123";

		const userMongo = await User.find({ UID: userId }).select("S3IDs");
		console.log("yo");
		const userS3IDs = userMongo[0].S3IDs;
		console.log(userS3IDs.length);
		const creations = [];

		for (let i = 0; i < userS3IDs.length; i++) {
			const creation = await Creation.findOne({ S3ID: userS3IDs[i] }).select(
				"title createdAt"
			);
			if (creation) {
				creations.push({
					title: creation.title,
					s3id: userS3IDs[i],
					createdAt: creation.createdAt,
				});
			}
		}

		console.log(creations);
		return NextResponse.json({ success: true, creations });
	} catch (error) {
		console.error("Error in POST request:", error);
		return NextResponse.json(
			{ success: false, error: error.message },
			{ status: 500 }
		);
	}
});
