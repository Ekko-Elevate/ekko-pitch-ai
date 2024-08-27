import { connectToDatabase } from "@/app/_lib/mongoDB/connection/db.js";
import { User } from "@/app/_lib/mongoDB/models/user.js";
import { Creation } from "@/app/_lib/mongoDB/models/creations.js";

export async function getCreations(userId) {
    await connectToDatabase();
    //get S3IDs from userID
    const userMongo = await User.find({ UID : userId }).select('S3IDs');
    console.log("yo");
    const userS3IDs = userMongo[0].S3IDs;
    console.log(userS3IDs.length);
    const creations = [];

    //get titles and createdAts and place in array w S3IDs
    for (let i = 0; i < userS3IDs.length; i++) {
        const creation = await Creation.findOne({ S3ID: userS3IDs[i] }).select('title createdAt');
        if (creation) {
            creations.push({
                title: creation.title,
                s3id: userS3IDs[i],
                createdAt: creation.createdAt
            });
        }
    }
    return creations;
}