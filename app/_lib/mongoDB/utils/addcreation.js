import { connectToDatabase } from "@/app/_lib/mongoDB/connection/db.js";
import { User } from "@/app/_lib/mongoDB/models/user.js";
import { Creation } from "@/app/_lib/mongoDB/models/creations.js";

export async function addCreation(UID, title, S3ID) {
	await connectToDatabase();
	//create mongo session to add atomic behavior, if one of 2 transactions fail the whole thing fails
	const session = await User.startSession();

	try {
		// Start the transaction
		await session.withTransaction(async () => {
			// Update the user's S3IDs array and create the new creation
			const [user, creation] = await Promise.all([
				User.findOneAndUpdate(
					{ UID },
					{ $push: { S3IDs: S3ID } },
					{ new: true, session }
				),
				Creation.create(
					{
						UID,
						S3ID,
						title,
						createdAt: new Date(), // Explicitly set the creation date
					},
					{ session }
				),
			]);
		});
	} catch (error) {
		console.error("Error in addCreation:", error);
		throw error;
	} finally {
		// Always end the session
		session.endSession();
	}
}
