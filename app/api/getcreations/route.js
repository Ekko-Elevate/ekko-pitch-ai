    //first need to get all the ads a user has made from mongo
        //retrieve id list from User table
        //crossreference with Creations table and get title of ad
    //return array of user's creation title
import { NextResponse } from "next/server.js";
import { getCreations } from "@/app/_lib/mongoDB/utils/getcreations";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

//export const POST = withApiAuthRequired(async function imgToVid(req) {

export const GET = withApiAuthRequired(async function makeGenRoute(req) {
    try {
        const session = await getSession(req);
        const user = session.user;
        //console.log(user);
        // Parse the JSON body of the request
        
        const userId = user.sub;
        //console.log(userId);
        //const userId = "user123";

        let creations = await getCreations(userId);

        console.log(creations);
        return NextResponse.json({ success: true, creations });
    } catch (error) {
        console.error("Error in POST request:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
})