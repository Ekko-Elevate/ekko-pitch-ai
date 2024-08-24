import { connectToDatabase } from "../../_lib/mongoDB/db.js";
import { User } from "../../_lib/mongoDB/models/user.js";
import { Creation } from "../../_lib/mongoDB/models/creations.js"; // Assuming you have this model

export async function addCreation(UID, title, S3ID) {
	await connectToDatabase();
	try {
		// Update the user document
		const user = await User.findOneAndUpdate(
			{ UID: UID },
			{ $push: { CID: S3ID } },
			{ new: true }
		);

		if (!user) {
			console.error("User not found");
			return null;
		}

		// Create a new creation document
		const newCreation = new Creation({
			UID: UID,
			S3ID: S3ID,
			Title: title,
		});

		const savedCreation = await newCreation.save();

		console.log("User updated:", user);
		console.log("New creation added:", savedCreation);

		return { user, creation: savedCreation };
	} catch (error) {
		console.error("Error updating user or adding creation:", error);
		throw error;
	}
}
