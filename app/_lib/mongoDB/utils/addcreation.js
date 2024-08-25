import { connectToDatabase } from "@/app/_lib/mongoDB/connection/db.js";
import { User } from "@/app/_lib/mongoDB/models/user.js";
import { Creation } from "@/app/_lib/mongoDB/models/creations.js";

export async function addCreation(UID, title, S3ID) {
	console.log(UID, title, S3ID);
	await connectToDatabase();
	const session = await User.startSession();

	try {
		const result = await session.withTransaction(async () => {
			// Update the user's S3IDs array
			const user = await User.findOneAndUpdate(
				{ UID },
				{ $push: { S3IDs: S3ID } },
				{ new: true, session }
			);

			if (!user) {
				throw new Error("User not found");
			}

			// Create the new creation
			const creation = await Creation.create(
				[
					{
						UID: UID,
						S3ID: S3ID,
						title: title,
						createdAt: new Date(),
					},
				],
				{ session }
			);

			return { user, creation: creation[0] };
		});

		return result;
	} catch (error) {
		console.error("Error in addCreation:", error);
		throw error;
	} finally {
		session.endSession();
	}
}
