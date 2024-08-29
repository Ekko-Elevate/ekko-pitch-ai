import { connectToDatabase } from "@/app/_lib/mongoDB/connection/db.js";
import { User } from "@/app/_lib/mongoDB/models/user.js";

export async function editTokens(UID, tokenAmount) {
	await connectToDatabase();
	try {
		let totalTokens;
		const user = (await User.findOne({ UID: UID })).isSelected("tokenAmount");
		if (user) {
			totalTokens = user.tokenAmount + tokenAmount;
		} else {
			console.log(`No user found with UID: ${UID}`);
			return null;
		}
		if (totalTokens < 0) {
			return null;
		}
		const updatedUser = await User.findOneAndUpdate(
			{ UID: UID }, //find user by UID
			{ $push: { token_amount: totalTokens } }, //push the new CID value to the CID array
			{ new: true } //return the updated document
		);
		if (!updatedUser) {
			console.error("user not found");
			return null;
		}
		console.log("User updated:", updatedUser);
		return updatedUser;
	} catch (error) {
		console.error("Error updating user:", error);
		return null;
	}
}
