    //first need to get all the ads a user has made from mongo
        //retrieve id list from User table
        //crossreference with Creations table and get title of ad
    //return array of user's creation title
import { connectToDatabase } from "../../_lib/mongoDB/db.js";
import { NextResponse } from "next/server.js";
import { User } from "../../_lib/mongoDB/user.js";
import { creations } from "../../_lib/mongoDB/user.js";

export async function POST(req) {
    try {
        await connectToDatabase();
        const msg = "worked";
        // Parse the JSON body of the request
        const { userId } = await req.json();

        if (!userId) {
            return NextResponse.json({ success: false, error: "User ID is required" }, { status: 400 });
        }

        const userS3IDs = await User.find({ userId }).select('CID');  // Only select the 'title' field
        console.log(userS3IDs);

        // For now, just return a placeholder response
        return NextResponse.json({ success: true, msg });
    } catch (error) {
        console.error("Error in POST request:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}