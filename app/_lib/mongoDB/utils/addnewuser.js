import { connectToDatabase } from "@/app/_lib/mongoDB/connection/db.js";
import { User } from "@/app/_lib/mongoDB/models/user.js";

// Function to add a user to mongo
export async function addNewUser(UID, userEmail) {
	await connectToDatabase();

	try {
		// Check if the user already exists
		const existingUser = await User.findOne({ UID });

		if (existingUser) {
			return;
		}

		// Create a new user if they don't exist
		const user = await User.create({
			UID,
			userEmail,
			subscription: "free",
			tokenAmount: 40,
			S3IDs: [],
		});

		return;
	} catch (error) {
		console.error("Error in addUser:", error);
		throw error;
	}
}
